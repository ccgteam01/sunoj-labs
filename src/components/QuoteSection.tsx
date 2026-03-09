import { motion } from "framer-motion";

interface QuoteSectionProps {
  quote: string;
  author: string;
}

const QuoteSection = ({ quote, author }: QuoteSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl md:text-5xl font-semibold text-primary leading-relaxed mb-6 tracking-tighter">
            "{quote}"
          </p>
          <cite className="text-primary/60 text-sm font-medium not-italic">
            {author}
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
