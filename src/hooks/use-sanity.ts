import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";
import * as queries from "@/lib/sanity-queries";

function useSanityQuery<T>(key: string, query: string, fallback: T, params?: Record<string, any>) {
  return useQuery<T>({
    queryKey: ["sanity", key, params],
    queryFn: async () => {
      try {
        const data = await sanityClient.fetch<T>(query, params ?? {});
        if (data === null || data === undefined) return fallback;
        if (Array.isArray(data) && data.length === 0) return fallback;
        return data;
      } catch (error) {
        console.error(`Sanity fetch error for ${key}:`, error);
        return fallback;
      }
    },
    placeholderData: fallback,
    staleTime: 1000 * 60 * 5,
    retry: false,
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

export function useCoworkers(fallback: any[]) {
  return useSanityQuery("coworkers", queries.COWORKERS_QUERY, fallback);
}

export function useAlumni(fallback: any[]) {
  return useSanityQuery("alumni", queries.ALUMNI_QUERY, fallback);
}

export function useAwards(fallback: any[]) {
  return useSanityQuery("awards", queries.AWARDS_QUERY, fallback);
}

export function usePublications(fallback: any[]) {
  return useSanityQuery("publications", queries.PUBLICATIONS_QUERY, fallback);
}

export function useThemes(fallback: any[] = []) {
  return useSanityQuery("themes", queries.THEMES_QUERY, fallback);
}

export function useComputePlatforms(fallback: any[] = []) {
  return useSanityQuery("computePlatforms", queries.COMPUTE_PLATFORMS_QUERY, fallback);
}

export function usePageBanner(page: string) {
  return useSanityQuery<{ images?: string[] } | null>(`pageBanner:${page}`, queries.PAGE_BANNER_QUERY, null, { page });
}

export function useBlogPosts(fallback: any[] = []) {
  return useSanityQuery("blogPosts", queries.BLOG_POSTS_QUERY, fallback);
}

export function useBlogPost(slug: string) {
  return useSanityQuery<any>(`blogPost:${slug}`, queries.BLOG_POST_QUERY, null, { slug });
}

export function useNews(fallback: any[]) {
  return useSanityQuery("news", queries.NEWS_QUERY, fallback);
}

export function useAlbums(fallback: any[]) {
  return useSanityQuery("albums", queries.ALBUMS_QUERY, fallback);
}

export function useCourses() {
  return useSanityQuery("courses", queries.COURSES_QUERY, []);
}

export function useLectures() {
  return useSanityQuery("lectures", queries.LECTURES_QUERY, []);
}

export function useHardware() {
  return useSanityQuery("hardware", queries.HARDWARE_QUERY, []);
}

export function useSoftware() {
  return useSanityQuery("software", queries.SOFTWARE_QUERY, []);
}

export function useGeneralResearch() {
  return useSanityQuery("generalResearch", queries.GENERAL_RESEARCH_QUERY, null);
}
