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
  FileText,
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
    desc: "Asymmetric reactions involving transition metal catalysts and organocatalysts. Origin of enantioselectivity and catalyst design principles.",
  },
  {
    icon: Leaf,
    title: "Mechanistic Studies on C-H Bond Activation",
    desc: "Role of additives and solvents in catalytic processes. Rational modifications to catalysts and substrates for enhanced performance.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning in Catalysis",
    desc: "Prediction of reaction outcome using computational methods. Artificial intelligence (AI)-enabled catalyst design and optimization.",
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

const recentPublications = [
  {
    title:
      "Chemo-, regio- and enantioselective hydroformylation of trisubstituted cyclopropenes",
    journal: "Nature Communications",
    year: "2024",
    imageUrl:
      "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif",
    doi: "10.1038/s41467-024-50689-z",
  },
  {
    title:
      "Role of Noncovalent Interactions in Inducing High Enantioselectivity",
    journal: "J. Am. Chem. Soc.",
    year: "2023",
    imageUrl:
      "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif",
    doi: "10.1021/jacs.3c06131",
  },
  {
    title: "A unified machine-learning protocol for asymmetric catalysis",
    journal: "Proc. Natl. Acad. Sci. USA",
    year: "2020",
    imageUrl:
      "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif",
    doi: "10.1073/pnas.1916392117",
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
              <span className="font-serif italic">Research</span> Interests
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
            {researchCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-primary rounded-xl p-6 sm:p-8 border border-border card-hover flex flex-col min-h-[280px] sm:min-h-[320px]"
              >
                <div className="bg-background rounded-full p-3 sm:p-4 mb-3 sm:mb-4 w-fit">
                  <card.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white tracking-tighter">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications & News */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Publications - 2/3 on large screens */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tighter">
                  Recent <span className="font-serif italic">Publications</span>
                </h2>
                <div className="section-divider" />
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPublications.map((pub, i) => (
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
                      src={pub.imageUrl}
                      alt={pub.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-medium text-accent mb-2">
                        {pub.year}
                      </span>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-auto">
                        {pub.journal}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/publications"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg group tracking-tighter"
                >
                  View All Publications
                  <div className="bg-white rounded-full text-accent p-2 transition-transform group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </div>
                </Link>{" "}
              </div>
            </div>

            {/* Latest News - 1/3 on large screens */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tighter">
                  Latest <span className="font-serif italic">News</span>
                </h2>
                <div className="section-divider" />
              </motion.div>
              <div className="flex flex-col gap-6">
                {newsItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border card-hover"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-accent/10 rounded-full p-2 mt-1">
                        <Newspaper className="text-accent" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium text-accent">
                          {item.year}
                        </span>
                        <p className="text-foreground mt-1 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-background">
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

      {/* CTA Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] w-[90%] mx-auto overflow-hidden mb-12 sm:mb-16 md:mb-24 rounded-xl md:rounded-2xl">
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
              to="/contact#positions"
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
