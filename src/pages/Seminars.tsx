import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const Seminars = () => {
  return (
    <PageLayout>
      <PageHero title="Group Seminars" />

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
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
