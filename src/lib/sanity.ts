import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "m2fbgni0",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2025-02-06",
  token: import.meta.env.VITE_SANITY_TOKEN,
  perspective: 'published',
});
