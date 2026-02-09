import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Camera } from "lucide-react";

const galleryItems = [
  "Group photo at IIT Bombay campus",
  "Lab computational workstations",
  "Conference presentation at ACS 2025",
  "Group retreat – Lonavala 2026",
  "Poster session highlights",
  "Collaboration visit to Max Planck Institute",
];

const Gallery = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <SectionHeading
          title="Group Life"
          subtitle="A glimpse into our research environment, conferences, collaborations, and group activities."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-[4/3] bg-secondary rounded-xl border border-border flex flex-col items-center justify-center gap-3 card-hover"
            >
              <Camera size={32} className="text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground text-center px-4">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Gallery;
