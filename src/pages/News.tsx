import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { NewsSkeleton } from "@/components/Skeleton";
import { useNews } from "@/hooks/use-sanity";

const News = () => {
  const { data, isFetching } = useNews([]);
  const newsItems = (data ?? []) as any[];

  return (
    <PageLayout>
      <PageHero title="News" />

      <section className="py-12 bg-transparent">
        <div className="container">
          {isFetching && newsItems.length === 0 ? (
            <NewsSkeleton />
          ) : (
            <div className="flex flex-col gap-3">
              {newsItems.map((item: any, i: number) => (
                <motion.div key={item._id || i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="bg-card rounded-lg p-4 border border-border flex items-start justify-between gap-4">
                  <p className="text-foreground text-sm">{item.text}</p>
                  {item.year && (
                    <span className="shrink-0 text-xs font-medium text-muted-foreground tabular-nums">{item.year}</span>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
