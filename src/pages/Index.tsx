import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  Leaf,
  Newspaper,
  BrainCircuit,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const heroSlides = [
  {
    image: heroSlide1,
    tagline: "CCML @ IIT Bombay",
    title: "Asymmetric Multi-Catalytic Reactions",
    desc: "Cooperative and relay catalytic strategies for enantioselective synthesis using transition metal and organo-catalysts.",
    link: "/research",
    linkLabel: "Explore Research",
  },
  {
    image: heroSlide2,
    tagline: "Computational Chemistry · Machine Learning",
    title: "Machine Learning in Catalysis",
    desc: "A unified ML protocol for asymmetric catalysis — reaction prediction, catalyst screening, and molecular descriptor analysis.",
    link: "/publications",
    linkLabel: "View Publications",
  },
  {
    image: heroSlide3,
    tagline: "Mechanisms · Molecules · Innovation",
    title: "Transition Metal Catalysis & C–H Activation",
    desc: "Mechanistic understanding of Pd, Rh, Ir-catalyzed transformations, cross-coupling reactions, and sustainable chemistry.",
    link: "/about",
    linkLabel: "About Our Group",
  },
];

const researchCards = [
  {
    icon: Beaker,
    title: "Asymmetric Multi-Catalytic Reactions",
    desc: "Asymmetric reactions involving transition metal and organo-catalysts, cooperative and relay catalytic strategies for enantioselective synthesis.",
  },
  {
    icon: Leaf,
    title: "Transition Metal Catalysis",
    desc: "C–H activation, cross-coupling reactions, and mechanistic understanding of Pd, Rh, Ir, and other transition metal catalyzed transformations.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning in Catalysis",
    desc: "A unified machine-learning protocol for asymmetric catalysis, reaction prediction, and catalyst screening using molecular descriptors.",
  },
];

const newsItems = [
  {
    text: "Prof. Sunoj honoured with the National Teacher Award 2023 by the President of India",
    year: "2023",
  },
  {
    text: "Paper on enantioselective hydroformylation of cyclopropenes published in Nature Communications",
    year: "2024",
  },
  {
    text: "Machine learning protocol for asymmetric catalysis published in PNAS",
    year: "2020",
  },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % heroSlides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <PageLayout>
      {/* Hero — Full-screen image carousel */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[current].image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Content overlay */}
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
                  {heroSlides[current].tagline}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-5 tracking-tighter">
                  {heroSlides[current].title}
                </h1>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  {heroSlides[current].desc}
                </p>
                <Link
                  to={heroSlides[current].link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg group tracking-tighter"
                >
                  {heroSlides[current].linkLabel}
                  <div className="bg-white rounded-full text-accent p-2 transition-transform group-hover:translate-x-1">
                    <ChevronRight size={25} />
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="container mt-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {heroSlides.map((_, i) => (
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
                      transition={{ duration: 5, ease: "linear" }}
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

      {/* Research Highlights */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-semibold mb-3 tracking-tighter">
              <span className="font-serif italic">Research</span> Highlights
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            {researchCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-primary rounded-xl p-8 border border-border card-hover aspect-square flex flex-col justify-between"
              >
                <h3 className="text-xl font-semibold mb-3 text-white tracking-tighter">
                  {card.title}
                </h3>
                {/* <div className="w-12 h-12 bg-accent/10 text-white rounded-lg flex items-center justify-center mb-5">
                <card.icon size={24} />
              </div> */}
                <p
                  className="text-[#ffffffb3] font-medium leading-relaxed"
                  style={{ lineHeight: "1.2" }}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 ">
        <div className="container">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl md:text-5xl font-semibold text-primary leading-relaxed mb-6 tracking-tighter">
              "
              <span className="font-serif italic">
                Mechanistic understanding
              </span>{" "}
              is the bridge between{" "}
              <span className="font-serif italic">chemical intuition</span> and{" "}
              <span className="font-serif italic">molecular innovation</span>."
            </p>
            <cite className="text-primary/60 text-sm font-medium not-italic">
              — CCML Group, IIT Bombay
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* Awards + News */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-3 tracking-tighter">
              Latest <span className="font-serif italic">News</span> &
              Achievements
            </h2>
            <div className="section-divider mb-8" />
          </motion.div>
          <div className="flex flex-col gap-4">
            {newsItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                {i === 0 ? (
                  <Award size={18} className="text-gold mt-1 shrink-0" />
                ) : (
                  <Newspaper size={18} className="text-accent mt-1 shrink-0" />
                )}
                <div>
                  <p className="text-foreground">{item.text}</p>
                  <span className="text-xs text-muted-foreground">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 mt-6 text-accent font-medium hover:underline"
          >
            All News <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] w-full w-5/6 mx-auto overflow-hidden mb-12 sm:mb-16 md:mb-24 rounded-xl md:rounded-2xl">
        <img
          src="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68ad9dd3f880ff51227d29cd_cta_banner-min.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 container py-16 sm:py-20 md:py-24 lg:py-32 flex items-center justify-center min-h-[400px] md:min-h-[500px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Interested in <span className="font-serif italic">joining</span>{" "}
              our group?
            </h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium leading-none mb-6 sm:mb-7 md:mb-8 tracking-tighter px-2 sm:px-0">
              We welcome motivated students and postdoctoral researchers
              passionate about computational chemistry and molecular science.
            </p>

            <Link
              to="/positions"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white text-accent font-semibold rounded-full shadow-lg hover:bg-white/90 transition-colors text-base sm:text-lg group tracking-tighter"
            >
              Open Positions
              <div className="bg-accent rounded-full text-white p-1.5 sm:p-2 transition-transform group-hover:translate-x-1">
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
