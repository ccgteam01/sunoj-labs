import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { useCourses } from "@/hooks/use-sanity";

const Courses = () => {
  const { data: courses = [] } = useCourses();

  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group · IIT Bombay"
        title="Courses Taught"
        description="Courses taught by Prof. Raghavan B. Sunoj at IIT Bombay."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="Courses" />
          <div className="grid sm:grid-cols-2 gap-3">
            {courses.map((course: any, i: number) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-lg p-4 border border-border"
              >
                <p className="text-sm font-medium text-foreground">
                  {course.code} ({course.name})
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Courses;
