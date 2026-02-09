import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Beaker, Leaf, Newspaper, BrainCircuit, Award, ChevronLeft, ChevronRight } from "lucide-react";
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
    tagline: "Curious Catalysts · Machine Learning",
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
  { text: "Prof. Sunoj honoured with the National Teacher Award 2023 by the President of India", year: "2023" },
  { text: "Paper on enantioselective hydroformylation of cyclopropenes published in Nature Communications", year: "2024" },
  { text: "Machine learning protocol for asymmetric catalysis published in PNAS", year: "2020" },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
  <PageLayout>
    {/* Hero — Full-screen image carousel */}
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="text-accent font-medium text-xs uppercase tracking-[0.25em] mb-4">
                {heroSlides[current].tagline}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-5">
                {heroSlides[current].title}
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                {heroSlides[current].desc}
              </p>
              <Link
                to={heroSlides[current].link}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                {heroSlides[current].linkLabel} <ArrowRight size={18} />
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Research Highlights</h2>
          <div className="section-divider mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {researchCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-xl p-8 border border-border card-hover">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-5">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-primary-foreground/90 italic leading-relaxed mb-6">
            "Mechanistic understanding is the bridge between chemical intuition and molecular innovation."
          </p>
          <cite className="text-primary-foreground/60 text-sm font-medium not-italic">
            — CCML Group, IIT Bombay
          </cite>
        </motion.blockquote>
      </div>
    </section>

    {/* Awards + News */}
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold mb-3">Latest News & Achievements</h2>
              <div className="section-divider mb-8" />
            </motion.div>
            <div className="flex flex-col gap-4">
              {newsItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                  {i === 0 ? <Award size={18} className="text-gold mt-1 shrink-0" /> : <Newspaper size={18} className="text-accent mt-1 shrink-0" />}
                  <div>
                    <p className="text-foreground">{item.text}</p>
                    <span className="text-xs text-muted-foreground">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 mt-6 text-accent font-medium hover:underline">
              All News <ArrowRight size={16} />
            </Link>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-10 border border-border">
            <h3 className="text-2xl font-heading font-bold mb-4">Interested in joining our group?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We welcome motivated students and postdoctoral researchers passionate about computational chemistry and molecular science.
            </p>
            <Link to="/positions" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              Open Positions <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  </PageLayout>
  );
};

export default Index;
