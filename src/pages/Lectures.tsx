import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { LecturesSkeleton } from "@/components/Skeleton";
import { useLectures } from "@/hooks/use-sanity";

const Lectures = () => {
  const { data: lectures = [], isFetching } = useLectures();
  
  const invitedLectures = lectures.filter((l: any) => l.type === 'invited');
  const publicLectures = lectures.filter((l: any) => l.type === 'public');

  return (
    <PageLayout>
      <PageHero title="Lectures" />

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tighter">Invited Lectures</h2>
          {isFetching && lectures.length === 0 ? (
            <LecturesSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {invitedLectures.map((lecture: any, idx: number) => (
                <div key={lecture._id} className="bg-card rounded-lg p-3 border border-border flex gap-3">
                  <span className="text-xs font-mono text-muted-foreground shrink-0 mt-0.5">
                    [{invitedLectures.length - idx}]
                  </span>
                  <p className="text-sm text-muted-foreground">{lecture.title}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tighter">Public Lectures</h2>
          {isFetching && lectures.length === 0 ? (
            <LecturesSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {publicLectures.map((lecture: any, idx: number) => (
                <div key={lecture._id} className="bg-card rounded-lg p-4 border border-border flex gap-3">
                  <span className="text-xs font-mono text-muted-foreground shrink-0 mt-0.5">
                    [{publicLectures.length - idx}]
                  </span>
                  <p className="text-sm text-foreground">{lecture.title}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Lectures;
