import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { CoursesSkeleton } from "@/components/Skeleton";
import { useCourses } from "@/hooks/use-sanity";

const Courses = () => {
  const { data: courses = [], isFetching } = useCourses();

  return (
    <PageLayout>
      <PageHero title="Courses Taught" />

      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          {isFetching && courses.length === 0 ? (
            <CoursesSkeleton />
          ) : (
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
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Courses;
