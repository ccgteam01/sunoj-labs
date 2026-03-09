import { useEffect, useState } from "react";
import { sanityClient } from "@/lib/sanity";
import {
  HERO_SLIDES_QUERY,
  RESEARCH_AREAS_QUERY,
  NEWS_QUERY,
  RECENT_PUBLICATIONS_QUERY,
  HOMEPAGE_QUERY,
} from "@/lib/sanity-queries";

export const useHomepageData = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroSlides, researchAreas, news, publications, homepage] = await Promise.all([
          sanityClient.fetch(HERO_SLIDES_QUERY),
          sanityClient.fetch(RESEARCH_AREAS_QUERY),
          sanityClient.fetch(NEWS_QUERY),
          sanityClient.fetch(RECENT_PUBLICATIONS_QUERY),
          sanityClient.fetch(HOMEPAGE_QUERY),
        ]);

        setData({ heroSlides, researchAreas, news, publications, homepage });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};
