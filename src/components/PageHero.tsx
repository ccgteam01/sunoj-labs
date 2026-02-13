import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  tagline?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
}

const PageHero = ({ tagline, title, description, ctaText, ctaLink, bgImage }: PageHeroProps) => {
  return (
    <header className="relative h-screen overflow-hidden flex items-center justify-center">
      {bgImage && (
        <>
          <div className="absolute inset-0">
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
          </div>
        </>
      )}
      {!bgImage && <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />}
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`font-medium text-xs uppercase tracking-[0.25em] mb-4 ${bgImage ? 'text-accent' : 'text-accent'}`}
            >
              {tagline}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tighter"
            style={{
              backgroundImage: 'linear-gradient(180deg, hsl(var(--primary)), #354faeb3',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              lineHeight: '1.17'
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed mb-8 text-primary"
          >
            {description}
          </motion.p>
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to={ctaLink}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg group tracking-tighter"
              >
                {ctaText}
                <div className="bg-white rounded-full text-accent p-2 transition-transform group-hover:translate-x-1">
                  <ChevronRight size={25} />
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHero;
