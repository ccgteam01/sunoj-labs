import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";
import * as queries from "@/lib/sanity-queries";

function useSanityQuery<T>(key: string, query: string, fallback: T) {
  return useQuery<T>({
    queryKey: ["sanity", key],
    queryFn: async () => {
      try {
        const data = await sanityClient.fetch<T>(query);
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
