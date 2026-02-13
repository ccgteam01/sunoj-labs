import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { useLectures } from "@/hooks/use-sanity";

const Lectures = () => {
  const { data: lectures = [] } = useLectures();
  
  const invitedLectures = lectures.filter((l: any) => l.type === 'invited');
  const publicLectures = lectures.filter((l: any) => l.type === 'public');

  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group · IIT Bombay"
        title="Lectures"
        description="Invited and public lectures by Prof. Raghavan B. Sunoj."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="Invited Lectures" />
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
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title="Public Lectures" />
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
        </div>
      </section>
    </PageLayout>
  );
};

export default Lectures;
