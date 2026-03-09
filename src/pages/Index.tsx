import { Beaker, Leaf, BrainCircuit, Atom, FlaskConical } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import ResearchInterests from "@/components/ResearchInterests";
import RecentNews from "@/components/RecentNews";
import RecentPublications from "@/components/RecentPublications";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import { HeroSkeleton, ResearchInterestsSkeleton, RecentNewsSkeleton, RecentPublicationsSkeleton } from "@/components/Skeleton";
import { useHomepageData } from "@/hooks/useHomepageData";

const iconMap: Record<string, any> = {
  Beaker,
  Leaf,
  BrainCircuit,
  Atom,
  FlaskConical,
};

const Index = () => {
  const { data, loading } = useHomepageData();

  if (loading) {
    return (
      <PageLayout>
        <HeroSkeleton />
        <ResearchInterestsSkeleton />
        <RecentNewsSkeleton />
        <RecentPublicationsSkeleton />
      </PageLayout>
    );
  }

  if (!data) return null;

  const heroSlides = data.heroSlides?.map((slide: any) => ({
    image: slide.imageUrl,
    tagline: slide.tagline,
    title: slide.title,
    desc: slide.description,
    link: slide.link,
    linkLabel: slide.linkLabel,
  })) || [];

  const researchCards = data.researchAreas?.map((area: any) => ({
    icon: iconMap[area.icon] || Beaker,
    title: area.title,
    desc: area.description,
  })) || [];

  const newsItems = data.news?.slice(0, 3).map((item: any) => ({
    text: item.text,
    year: String(item.year),
  })) || [];

  const publications = data.publications?.map((pub: any) => ({
    title: pub.title,
    journal: pub.journal,
    year: String(pub.year),
    imageUrl: pub.imageUrl,
    doi: pub.doi,
  })) || [];

  return (
    <PageLayout>
      {heroSlides.length > 0 && <HeroSection slides={heroSlides} />}
      {researchCards.length > 0 && <ResearchInterests cards={researchCards} />}
      {newsItems.length > 0 && <RecentNews items={newsItems} />}
      {publications.length > 0 && <RecentPublications publications={publications} />}
      {/* {data.homepage?.quote && (
        <QuoteSection quote={data.homepage.quote} author={data.homepage.quoteAuthor} />
      )}
      {data.homepage?.ctaTitle && (
        <CTASection
          backgroundImage={data.homepage.ctaBackgroundImageUrl}
          title={<>{data.homepage.ctaTitle}</>}
          description={data.homepage.ctaDescription}
          buttonText={data.homepage.ctaButtonText}
          buttonLink={data.homepage.ctaButtonLink}
        />
      )} */}
    </PageLayout>
  );
};

export default Index;
