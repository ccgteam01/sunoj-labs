import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { useCourses } from "@/hooks/use-sanity";

const Courses = () => {
  const { data: courses = [] } = useCourses();

  return (
    <PageLayout>
      <section className="pt-32 pb-12 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tighter">Courses Taught</h1>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
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
