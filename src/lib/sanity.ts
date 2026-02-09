import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "m2fbgni0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-06",
});
