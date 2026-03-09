import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";

interface NewsItem {
  text: string;
  year: string;
}

interface RecentNewsProps {
  items: NewsItem[];
}

const RecentNews = ({ items }: RecentNewsProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-3 tracking-tighter">
            Recent News
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="flex items-start gap-3">
                <div className="bg-accent/10 rounded-full p-2 mt-1">
                  <Newspaper className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-accent">{item.year}</span>
                  <p className="text-foreground mt-1 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg group tracking-tighter"
        >
          View All News
          <div className="bg-white rounded-full text-accent p-2 transition-transform group-hover:translate-x-1">
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default RecentNews;
