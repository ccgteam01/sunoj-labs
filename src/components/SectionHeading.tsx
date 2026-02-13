import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tighter">
      {title}
    </h2>
    <div className={`section-divider ${center ? "mx-auto" : ""}`} />
    {subtitle && (
      <p className={`mt-4 text-muted-foreground max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
