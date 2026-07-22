import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { CoursesSkeleton } from "@/components/Skeleton";
import { useCourses, usePageBanner } from "@/hooks/use-sanity";
import { sizedImage } from "@/lib/sanity";

// fallback if no banner images set in Sanity
const FALLBACK_BANNERS = [
  "https://cdn.sanity.io/images/m2fbgni0/production/f4e5e025eb2c8cccc92d418457d32ba07697e7ce-4096x3072.jpg",
];

const Courses = () => {
  const { data: courses = [], isFetching } = useCourses();
  const banner = usePageBanner("courses").data;
  const images = (banner?.images?.length ? banner.images : FALLBACK_BANNERS).map((u) => sizedImage(u) as string);

  return (
    <PageLayout>
      <PageHero title="Courses Taught" banners={images} tall />

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
