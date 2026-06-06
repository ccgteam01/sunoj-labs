"""
ACS Abstract Image Scraper (v3 — Selenium)
-------------------------------------------
Uses a headless Chrome browser to load each article page,
bypassing 403 bot-detection that blocks plain requests.

Non-ACS DOIs are routed via doi.org to their real publisher.

Usage:
    pip install selenium beautifulsoup4
    python scrape_acs_images.py

Requirements:
    Chrome must be installed. Selenium Manager auto-downloads chromedriver.
"""

import csv
import os
import random
import time

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException

# ── DOI list ──────────────────────────────────────────────────────────────────

DOIS = [
    "10.1021/acscatal.5c07050",
    "10.1021/acscatal.5c07050",   # duplicate — de-duped at runtime
    "10.1021/acscatal.5c01802",
    "10.1021/jacs.4c08866",
    "10.3233/FAIA240796",
    "10.1021/acscatal.4c01194",
    "10.1002/ange.202310112",
    "10.1021/acs.jpca.3c04779",
    "10.1021/acs.accounts.2c00801",
    "10.1021/jacs.2c10975",
    "10.1021/acscatal.2c05725",
    "10.1016/j.isci.2022.104661",
    "10.1063/5.0084432",
    "10.1021/acs.joc.1c02222",
    "10.1021/acs.joc.1c02126",
    "10.1002/ijch.202100106",
    "10.1021/jacs.0c06942",
    "10.1021/jacs.9b13962",
    "10.1021/jacs.0c05223",
    "10.1021/jacs.9b13537",
    "10.1021/acscatal.9b05526",
    "10.1073/pnas.1916392117",
    "10.1021/jacs.8b11062",
    "10.1021/acscatal.8b02537",
    "10.1021/acscatal.8b02435",
    "10.1021/jacs.5b05902",
    "10.1021/acscatal.5b01870",
    "10.1021/cs502006x",
    "10.1002/chin.201512345",
    "10.1021/ja5076629",
    "10.1021/jo501322v",
    "10.1021/ja412770h",
    "10.1002/ange.201309532",
    "10.1002/chin.201108275",
    "10.1002/chin.201304197",
    "10.1002/chin.201224259",
    "10.1021/ja101913k",
    "10.1002/ange.201001588",
    "10.1002/chin.201038263",
    "10.1021/jo061198u",
    "10.1002/chem.200801822",
]

# ── Config ────────────────────────────────────────────────────────────────────

SKIP_DOMAINS = ("ebooks.iospress.nl",)

DELAY_MIN    = 5.0
DELAY_MAX    = 12.0
PAGE_TIMEOUT = 30
RETRY_MAX    = 3
ACS_PREFIXES = ("10.1021/",)

# ── Driver setup ──────────────────────────────────────────────────────────────

def make_driver() -> webdriver.Chrome:
    opts = Options()
    opts.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
    driver = webdriver.Chrome(options=opts)
    return driver


# ── URL routing ───────────────────────────────────────────────────────────────

def get_article_url(doi: str) -> str:
    if any(doi.startswith(p) for p in ACS_PREFIXES):
        return f"https://pubs.acs.org/doi/{doi}"
    return f"https://doi.org/{doi}"


# ── Image extraction ──────────────────────────────────────────────────────────

def extract_image_url(driver: webdriver.Chrome) -> tuple[str, str]:
    """Try multiple strategies on the already-loaded page."""
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")
    base = driver.current_url

    from urllib.parse import urlparse
    parsed_base = urlparse(base)
    origin = f"{parsed_base.scheme}://{parsed_base.netloc}"

    # 1. ACS abstract figure (highest-quality TOC image)
    for selector in [
        ".article_abstract-img img",
        "figure.article__inlineFigure img",
        ".article_abstract img",
        "#abstractBox img",
    ]:
        tag = soup.select_one(selector)
        if tag:
            src = tag.get("src") or tag.get("data-src", "")
            if src:
                if src.startswith("/"):
                    src = origin + src
                return src, "acs-figure"

    # 2. og:image meta (reliable across Wiley, Elsevier, PNAS, AIP)
    og = soup.find("meta", property="og:image")
    if og and og.get("content"):
        return og["content"], "og:image"

    # 3. Wiley Online Library abstract figure
    for selector in [
        'figure[data-type="abstract"] img',
        ".abstract-group img",
        ".article-section__content figure img",
    ]:
        tag = soup.select_one(selector)
        if tag:
            src = tag.get("src") or tag.get("data-src", "")
            if src:
                if src.startswith("//"):
                    src = "https:" + src
                elif src.startswith("/"):
                    src = origin + src
                return src, "wiley-figure"

    # 4. Any <img> inside an element with "abstract" in its id/class
    for tag in soup.find_all("img"):
        parent_ids = " ".join(p.get("id", "") for p in tag.parents if hasattr(p, "get"))
        parent_cls = " ".join(
            " ".join(c if isinstance(c, str) else " ".join(c) for c in (p.get("class") or []))
            for p in tag.parents if hasattr(p, "get")
        )
        if "abstract" in (parent_ids + parent_cls).lower():
            src = tag.get("src") or tag.get("data-src", "")
            if src:
                if src.startswith("//"):
                    src = "https:" + src
                elif src.startswith("/"):
                    src = origin + src
                return src, "heuristic"

    return "", "no image found"


# ── Image download ────────────────────────────────────────────────────────────

import requests as _req

def download_image(url: str, doi: str, out_dir: str, driver: webdriver.Chrome = None) -> str:
    if not url:
        return ""
    ext = url.split(".")[-1].split("?")[0][:5]
    if not ext or len(ext) > 4:
        ext = "img"
    safe = doi.replace("/", "_").replace(".", "-")
    path = os.path.join(out_dir, f"{safe}.{ext}")

    # For ACS images, use cookies from the Selenium session to avoid 403
    session_cookies = {}
    if driver and any(doi.startswith(p) for p in ACS_PREFIXES):
        session_cookies = {c["name"]: c["value"] for c in driver.get_cookies()}

    try:
        r = _req.get(url, timeout=25, headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            "Referer": f"https://pubs.acs.org/doi/{doi}",
        }, cookies=session_cookies)
        r.raise_for_status()
        with open(path, "wb") as f:
            f.write(r.content)
        return os.path.basename(path)
    except Exception as e:
        return f"download error: {e}"


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    out_dir  = "images"
    csv_path = "acs_abstract_images.csv"
    os.makedirs(out_dir, exist_ok=True)

    # De-duplicate preserving order
    seen, unique_dois = set(), []
    for doi in DOIS:
        if doi not in seen:
            seen.add(doi)
            unique_dois.append(doi)

    print(f"Launching Chrome for {len(unique_dois)} unique DOIs...")
    print("If a security verification appears, solve it manually, then press Enter here to continue.")
    driver = make_driver()

    try:
        with open(csv_path, "w", newline="", encoding="utf-8") as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(["DOI", "Image URL", "Local File", "Method", "Status"])

            for i, doi in enumerate(unique_dois, 1):
                print(f"[{i}/{len(unique_dois)}] {doi} ...", end=" ", flush=True)
                url = get_article_url(doi)

                try:
                    img_url, method, status, local_file = "", "", "", ""
                    for attempt in range(1, RETRY_MAX + 1):
                        driver.get(url)
                        WebDriverWait(driver, PAGE_TIMEOUT).until(
                            EC.presence_of_element_located((By.TAG_NAME, "body"))
                        )
                        time.sleep(2.5)

                        # Skip unsupported domains after redirect
                        from urllib.parse import urlparse
                        if any(urlparse(driver.current_url).netloc.endswith(d) for d in SKIP_DOMAINS):
                            print("[unsupported domain — skipped]")
                            writer.writerow([doi, "", "", "", "unsupported-domain-skipped"])
                            break

                        # Check for soft 403 / CAPTCHA / Cloudflare challenge
                        page_title = driver.title.lower()
                        page_body  = driver.find_element(By.TAG_NAME, "body").text.lower()
                        blocked = (
                            "access denied" in page_title
                            or "403" in page_title
                            or "captcha" in page_title
                            or "just a moment" in page_title  # Cloudflare
                            or "checking your browser" in page_body
                            or "enable javascript" in page_body
                        )
                        if blocked:
                            print(f"[cloudflare — skipped]")
                            writer.writerow([doi, "", "", "", "cloudflare-skipped"])
                            break

                        img_url, method = extract_image_url(driver)
                        if img_url:
                            break
                        elif attempt < RETRY_MAX:
                            print(f"[no image, retry {attempt}/{RETRY_MAX}]", end=" ", flush=True)
                            time.sleep(10 * attempt)

                    local_file = download_image(img_url, doi, out_dir, driver) if img_url else ""
                    status = "ok" if img_url else "no image found"
                    print(f"{status} ({method}) → {img_url[:80] if img_url else '—'}")
                    writer.writerow([doi, img_url, local_file, method, status])

                except TimeoutException:
                    print("timeout")
                    writer.writerow([doi, "", "", "", "timeout"])
                except WebDriverException as e:
                    msg = str(e).splitlines()[0]
                    print(f"webdriver error: {msg}")
                    writer.writerow([doi, "", "", "", f"webdriver error: {msg}"])

                time.sleep(random.uniform(DELAY_MIN, DELAY_MAX))

    finally:
        driver.quit()

    print(f"\nDone. Results → {csv_path}   Images → ./{out_dir}/")


if __name__ == "__main__":
    main()