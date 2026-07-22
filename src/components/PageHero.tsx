import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
  banner?: string;
  /** CSS object-position for the banner image, e.g. "center 80%" or "50% 30%" */
  bannerPosition?: string;
  /** Multiple banners cross-fade on a timer (overrides `banner`) */
  banners?: string[];
  /** Taller hero */
  tall?: boolean;
}

const DEFAULT_BANNER = "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif";

const PageHero = ({ title, description, banner = DEFAULT_BANNER, bannerPosition = "center 80%", banners, tall }: PageHeroProps) => {
  const slides = banners && banners.length ? banners : [banner];
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className={`relative overflow-hidden bg-background mt-20 ${tall ? "py-40 lg:py-56" : "py-24 lg:py-28"}`}>
      <div className="absolute inset-0 z-0 p-4">
        <div className="absolute inset-4 rounded-xl overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={i}
              src={slides[i]}
              alt=""
              style={{ objectPosition: bannerPosition }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tighter mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-xl text-muted-foreground leading-tight md:leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
