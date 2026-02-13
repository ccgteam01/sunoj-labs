import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const Seminars = () => {
  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group · IIT Bombay"
        title="Group Seminars"
        description="View our group seminars calendar and upcoming events."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="Seminars Calendar" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?src=ccgiitb%40gmail.com&ctz=Asia%2FKolkata"
              className="w-full h-[600px] border-0 rounded"
              title="Group Seminars Calendar"
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Seminars;
