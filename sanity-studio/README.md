# CCML Group — Sanity Studio Schemas

## Setup Instructions

### 1. Create the Sanity Studio project (if not already done)

```bash
npm create sanity@latest -- --project m2fbgni0 --dataset production --template clean
```

### 2. Copy schemas into your Studio project

Copy all files from this `schemas/` folder into your Sanity Studio project's `schemaTypes/` directory (replacing the default `index.ts`).

```bash
cp schemas/*.ts /path/to/your-sanity-studio/schemaTypes/
```

### 3. Start Sanity Studio

```bash
cd /path/to/your-sanity-studio
npm run dev
```

Studio will be available at `http://localhost:3333`.

### 4. Add sample content

Once Studio is running, create documents for each content type. Here's the recommended order:

1. **Site Settings** — Group name, tagline, homepage quote
2. **About Page** — Group description, PI bio, awards, courses
3. **Hero Slides** — 3 slides with images for the homepage carousel
4. **Research Areas** — 4 research pillars with descriptions
5. **People** — Current members and alumni
6. **Publications** — Research papers with DOIs
7. **News Items** — Recent announcements by year
8. **Collaborators** — Partner institutions
9. **Gallery Items** — Lab/event photos
10. **Contact Info** — Email, address, social links
11. **Opportunities** — Open positions

### Schema Overview

| Schema | Type | Description |
|--------|------|-------------|
| `siteSettings` | Singleton | Global site name, tagline, quote |
| `aboutPage` | Singleton | About page content, PI info |
| `heroSlide` | Collection | Homepage carousel slides |
| `researchArea` | Collection | Research area cards |
| `person` | Collection | Team members & alumni |
| `publication` | Collection | Research papers |
| `newsItem` | Collection | News/announcements |
| `collaborator` | Collection | Research partners |
| `galleryItem` | Collection | Photo gallery |
| `contactInfo` | Singleton | Contact details & links |
| `opportunity` | Collection | Open positions |

### Icon Names

For `icon` fields (researchArea, opportunity, interests), use Lucide icon names:
`Atom`, `FlaskConical`, `Leaf`, `BrainCircuit`, `BookOpen`, `Cpu`, `Sparkles`, `GraduationCap`, `Beaker`, `Users`

### Notes

- Singletons (siteSettings, aboutPage, contactInfo) should only have **one** document each
- Use the `order` field to control display sequence
- Images support hotspot cropping in Studio
- The website falls back to static data if Sanity is empty or unreachable
