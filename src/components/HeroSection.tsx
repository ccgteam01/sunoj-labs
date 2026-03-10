import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  image: string;
  tagline: string;
  title: string;
  desc: string;
  link: string;
  linkLabel: string;
}

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection = ({ slides }: HeroSectionProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-end mt-16 pb-24 md:pb-32">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="text-white font-medium text-xs uppercase tracking-[0.25em] mb-4">
                {slides[current].tagline}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-5 tracking-tighter">
                {slides[current].title}
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                {slides[current].desc}
              </p>

              {slides[current].link && (
  <Link
    to={slides[current].link}
    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg group tracking-tighter"
  >
    {slides[current].linkLabel}
    <div className="bg-white rounded-full text-accent p-2 transition-transform group-hover:translate-x-1">
      <ChevronRight size={25} />
    </div>
  </Link>
)}
              
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative h-1 overflow-hidden rounded-full transition-all duration-300"
                style={{ width: i === current ? 48 : 24 }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span className="absolute inset-0 bg-white/30 rounded-full" />
                {i === current && (
                  <motion.span
                    className="absolute inset-0 bg-accent rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
