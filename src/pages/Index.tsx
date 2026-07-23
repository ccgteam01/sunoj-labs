import { Beaker, Leaf, BrainCircuit, Atom, FlaskConical, Newspaper, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import ProfIntroSection from "@/components/ProfIntroSection";
import ResearchInterests from "@/components/ResearchInterests";
import RecentPublications from "@/components/RecentPublications";
import { HeroSkeleton, ResearchInterestsSkeleton, RecentNewsSkeleton, RecentPublicationsSkeleton } from "@/components/Skeleton";
import { useHomepageData } from "@/hooks/useHomepageData";
import { sizedImage } from "@/lib/sanity";

const iconMap: Record<string, any> = { Beaker, Leaf, BrainCircuit, Atom, FlaskConical };

const Index = () => {
  const { data, loading } = useHomepageData();

  if (loading) {
    return (
      <PageLayout>
        <HeroSkeleton />
        <RecentNewsSkeleton />
        <RecentPublicationsSkeleton />
        <ResearchInterestsSkeleton />
      </PageLayout>
    );
  }

  if (!data) return null;

  const heroSlides = data.heroSlides?.map((slide: any) => ({
    image: sizedImage(slide.imageUrl),
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

  const newsItems = data.news?.slice(0, 6).map((item: any) => ({
    text: item.text,
    year: String(item.year),
  })) || [];

  const publications = data.publications?.map((pub: any) => ({
    title: pub.title,
    journal: pub.journal,
    year: String(pub.year),
    imageUrl: pub.graphicalAbstractUrl || pub.imageUrl,
    doi: pub.doi,
  })) || [];

  return (
    <PageLayout>
      {heroSlides.length > 0 && <HeroSection slides={heroSlides} />}

      {/* Shared sticky layout: main content (left) + sticky news (right) */}
      <div className="container py-0">
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Left: Prof intro + Recent publications stacked */}
          <div className="lg:col-span-2">
            <ProfIntroSection intro={data.homepage} />
            {publications.length > 0 && <RecentPublications publications={publications} />}
          </div>

          {/* Right: Sticky news panel - sticks until end of publications */}
          {newsItems.length > 0 && (
            <div className="lg:sticky lg:top-24 lg:self-start mt-4 lg:mt-20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="px-6 py-5 border-b border-border flex items-center gap-3">
                  <Newspaper size={18} className="text-accent" />
                  <h4 className="font-semibold tracking-tight">Recent News</h4>
                </div>
                <div className="divide-y divide-border max-h-[70vh] overflow-y-auto">
                  {newsItems.map((item: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="px-6 py-4"
                    >
                      <span className="text-xs font-semibold text-accent block mb-1">{item.year}</span>
                      <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-border">
                  <Link
                    to="/news"
                    className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
                  >
                    View all news <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {researchCards.length > 0 && <ResearchInterests cards={researchCards} />}
    </PageLayout>
  );
};

export default Index;
