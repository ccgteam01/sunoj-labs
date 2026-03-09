import { useMemo } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { NewsSkeleton } from "@/components/Skeleton";
import { useNews } from "@/hooks/use-sanity";

const News = () => {
  const { data: newsItems, isFetching } = useNews([]);

  const grouped = useMemo(() => {
    const groups: Record<number, string[]> = {};
    newsItems.forEach((item: any) => {
      if (!groups[item.year]) groups[item.year] = [];
      groups[item.year].push(item.text);
    });
    return Object.entries(groups)
      .map(([year, items]) => ({ year: Number(year), items }))
      .sort((a, b) => b.year - a.year);
  }, [newsItems]);

  return (
    <PageLayout>
      <PageHero title="News & Updates" />

      <section className="py-12 bg-background">
        <div className="container max-w-3xl">
          {isFetching && newsItems.length === 0 ? (
            <NewsSkeleton />
          ) : (
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="flex flex-col gap-12">
                {grouped.map((group) => (
                  <div key={group.year}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                        {String(group.year).slice(-2)}
                      </div>
                      <h3 className="text-2xl font-heading font-bold">{group.year}</h3>
                    </div>
                    <div className="flex flex-col gap-3 ml-12">
                      {group.items.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-lg p-4 border border-border">
                          <p className="text-foreground text-sm">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
