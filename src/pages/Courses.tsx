import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { CoursesSkeleton } from "@/components/Skeleton";
import { useCourses } from "@/hooks/use-sanity";
import { sizedImage } from "@/lib/sanity";

const COURSES_BANNERS = [
  "https://cdn.sanity.io/images/m2fbgni0/production/f4e5e025eb2c8cccc92d418457d32ba07697e7ce-4096x3072.jpg",
  "https://cdn.sanity.io/images/m2fbgni0/production/63896ee5d1978e53018824455d8635fc7ba3d215-6016x4016.jpg",
  "https://cdn.sanity.io/images/m2fbgni0/production/854e9e92086df8f00eed9c04637f955ef29a7687-1920x1080.jpg",
  "https://cdn.sanity.io/images/m2fbgni0/production/3d6aa83f62b0179253b0c9337a89ed5b97992b93-1920x1088.jpg",
].map((u) => sizedImage(u) as string);

const Courses = () => {
  const { data: courses = [], isFetching } = useCourses();

  return (
    <PageLayout>
      <PageHero title="Courses Taught" banners={COURSES_BANNERS} tall />

      <section className="py-12 bg-transparent">
        <div className="container">
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
