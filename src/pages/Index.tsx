import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, Leaf, Lightbulb, Newspaper, BrainCircuit, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

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

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="container relative z-10 py-20">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p custom={0} variants={fadeUp} className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            The RBS Group @ IIT Bombay
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Computational Chemistry for Modern Molecular Discovery
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            The Sunoj Research Group at IIT Bombay explores chemical reactivity, catalysis, and mechanistic pathways using advanced quantum chemical tools and emerging AI/ML approaches.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
            <Link to="/research" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              Explore Our Research <ArrowRight size={18} />
            </Link>
            <Link to="/publications" className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors">
              View Publications
            </Link>
          </motion.div>
        </motion.div>
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
            — Sunoj Research Group, IIT Bombay
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

export default Index;
