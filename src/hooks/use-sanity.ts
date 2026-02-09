import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";
import * as queries from "@/lib/sanity-queries";

function useSanityQuery<T>(key: string, query: string, fallback: T) {
  return useQuery<T>({
    queryKey: ["sanity", key],
    queryFn: () => sanityClient.fetch<T>(query),
    initialData: fallback,
    staleTime: 1000 * 60 * 5, // 5 min cache
    retry: 1,
  });
}

export function useHeroSlides(fallback: any[]) {
  return useSanityQuery("heroSlides", queries.HERO_SLIDES_QUERY, fallback);
}

export function useResearchAreas(fallback: any[]) {
  return useSanityQuery("researchAreas", queries.RESEARCH_AREAS_QUERY, fallback);
}

export function useCollaborators(fallback: any[]) {
  return useSanityQuery("collaborators", queries.COLLABORATORS_QUERY, fallback);
}

export function usePeople(fallback: any[]) {
  return useSanityQuery("people", queries.PEOPLE_QUERY, fallback);
}

export function usePublications(fallback: any[]) {
  return useSanityQuery("publications", queries.PUBLICATIONS_QUERY, fallback);
}

export function useNews(fallback: any[]) {
  return useSanityQuery("news", queries.NEWS_QUERY, fallback);
}

export function useOpportunities(fallback: any[]) {
  return useSanityQuery("opportunities", queries.OPPORTUNITIES_QUERY, fallback);
}

export function useGallery(fallback: any[]) {
  return useSanityQuery("gallery", queries.GALLERY_QUERY, fallback);
}

export function useContactInfo(fallback: any) {
  return useSanityQuery("contact", queries.CONTACT_QUERY, fallback);
}

export function useAboutPage(fallback: any) {
  return useSanityQuery("aboutPage", queries.ABOUT_PAGE_QUERY, fallback);
}

export function useSiteSettings(fallback: any) {
  return useSanityQuery("siteSettings", queries.SITE_SETTINGS_QUERY, fallback);
}
