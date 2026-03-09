import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";

interface ResearchCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ResearchInterestsProps {
  cards: ResearchCard[];
}

const ResearchInterests = ({ cards }: ResearchInterestsProps) => {
  const [carouselDeg, setCarouselDeg] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const rotateNext = () => {
    setCarouselDeg((d) => d - 40);
    setCardIndex((i) => (i + 1) % cards.length);
  };

  const rotatePrev = () => {
    setCarouselDeg((d) => d + 40);
    setCardIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-3 tracking-tighter">
            Research Interests
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Mobile: Simple 2D Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div className="relative w-full max-w-sm h-[375px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {(() => {
                const CardIcon = cards[cardIndex].icon;
                return (
                  <motion.div
                    key={cardIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-[280px] h-[280px] bg-primary rounded-xl p-5 flex flex-col shadow-2xl"
                  >
                    <div className="bg-background rounded-full p-2 mb-3 w-fit">
                      <CardIcon className="text-accent" size={20} />
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-white tracking-tighter">
                      {cards[cardIndex].title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {cards[cardIndex].desc}
                    </p>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={rotatePrev}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Previous card"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={rotateNext}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Next card"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop: 3D Carousel */}
        <div className="hidden md:flex flex-col items-center">
          <div
            className="relative w-full h-[350px] flex items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            <div
              className="relative w-[260px] h-[300px] transition-transform duration-1000 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${carouselDeg}deg)`,
              }}
            >
              {[...Array(9)].map((_, i) => {
                const card = cards[i % 3];
                const currentIndex = Math.round(-carouselDeg / 40);
                const normalizedCurrent = ((currentIndex % 9) + 9) % 9;
                const isVisible =
                  i === normalizedCurrent ||
                  i === (normalizedCurrent - 1 + 9) % 9 ||
                  i === (normalizedCurrent + 1) % 9;
                return (
                  <div
                    key={i}
                    className="absolute left-0 top-0 w-[240px] h-[240px] bg-primary rounded-xl p-5 flex flex-col shadow-2xl transition-opacity duration-500"
                    style={{
                      transform: `rotateY(${i * 40}deg) translateZ(400px)`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <div className="bg-background rounded-full p-2 mb-2 w-fit">
                      <card.icon className="text-accent" size={18} />
                    </div>
                    <h3 className="text-md font-semibold mb-1 text-white tracking-tighter">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={rotatePrev}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Previous card"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={rotateNext}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Next card"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
