import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "m2fbgni0",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2025-02-06",
  token: import.meta.env.VITE_SANITY_TOKEN,
  perspective: 'published',
});

// Picks width/quality from the browser's own connection estimate - a synchronous
// read of navigator.connection, so no probe, no extra request, no slowdown.
// Unsupported (Safari/Firefox) → falls through to the fast-connection defaults.
const tierForConnection = () => {
  const c = (navigator as any)?.connection;
  if (c?.saveData) return { w: 1280, q: 45 };          // user asked to save data
  switch (c?.effectiveType) {
    case "slow-2g":
    case "2g": return { w: 1280, q: 45 };
    case "3g": return { w: 1920, q: 60 };
    default:   return { w: 2560, q: 80 };               // 4g / unknown
  }
};

// Our GROQ queries return raw `asset->url` strings (the full-size original).
// Sanity's CDN resizes/recompresses on delivery via query params, so append them
// to shrink a 2MB original down to ~50-150KB. Pass maxWidth to cap for smaller slots.
export const sizedImage = (url: string | undefined, maxWidth = 2560) => {
  if (!url) return url;
  const { w, q } = tierForConnection();
  return `${url}?w=${Math.min(w, maxWidth)}&auto=format&q=${q}&fit=max`;
};

// Banner shared by the Academic section pages (Courses / Seminars / Lectures).
export const ACADEMIC_BANNER = sizedImage(
  "https://cdn.sanity.io/images/m2fbgni0/production/f4e5e025eb2c8cccc92d418457d32ba07697e7ce-4096x3072.jpg"
);
