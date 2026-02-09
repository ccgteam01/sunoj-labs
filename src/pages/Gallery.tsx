import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Camera } from "lucide-react";
import { useGallery } from "@/hooks/use-sanity";

const fallbackGallery = [
  { caption: "Group photo at IIT Bombay campus" },
  { caption: "Lab computational workstations" },
  { caption: "Conference presentation at ACS 2025" },
  { caption: "Group retreat – Lonavala 2026" },
  { caption: "Poster session highlights" },
  { caption: "Collaboration visit to Max Planck Institute" },
];

const Gallery = () => {
  const { data: items } = useGallery(fallbackGallery);

  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <SectionHeading title="Group Life" subtitle="A glimpse into our research environment, conferences, collaborations, and group activities." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="aspect-[4/3] bg-secondary rounded-xl border border-border flex flex-col items-center justify-center gap-3 card-hover overflow-hidden">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <Camera size={32} className="text-muted-foreground/40" />
                    <p className="text-sm text-muted-foreground text-center px-4">{item.caption}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
