import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  imageUrl: string;
  doi: string;
}

interface RecentPublicationsProps {
  publications: Publication[];
}

const RecentPublications = ({ publications }: RecentPublicationsProps) => {
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
            Recent Publications
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {publications.map((pub, i) => (
            <motion.a
              key={pub.doi}
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden card-hover flex flex-col"
            >
              <img 
                src={pub.imageUrl || "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"} 
                alt={pub.title} 
                className="w-full h-56 object-cover" 
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif";
                }}
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm font-medium text-accent mb-2">{pub.year}</span>
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-3 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-base text-muted-foreground mt-auto">{pub.journal}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg group tracking-tighter"
          >
            View All Publications
            <div className="bg-white rounded-full text-accent p-2 transition-transform group-hover:translate-x-1">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPublications;
