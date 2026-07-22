import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, FlaskConical, ChevronRight } from "lucide-react";
import sunojImage from "@/assets/sunoj-sir.jpg";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const highlights = [
  { category: "Research", icon: FlaskConical, items: [
    "Pioneer in computational asymmetric catalysis",
    "Transition metal-catalyzed reaction mechanisms",
    "Machine learning for chemical prediction",
    "200+ peer-reviewed publications, 7000+ citations",
  ]},
  { category: "Pedagogy", icon: GraduationCap, items: [
    "Teaching graduate courses in organic chemistry since 2003",
    "Trained 30+ PhD and 40+ M.Sc. students",
    "Taught 5000+ undergraduate students across core chemistry courses",
    "Developed advanced curriculum in computational chemistry at IIT Bombay",
  ]},
];

const particlesOptions: any = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    color: { value: ["#3b82f6", "#60a5fa", "#93c5fd"] },
    links: { enable: true, color: "#93c5fd", distance: 140, opacity: 0.15, width: 1 },
    move: { enable: true, speed: 0.6, outModes: { default: "bounce" } },
    number: { value: 55, density: { enable: true } },
    opacity: { value: { min: 0.08, max: 0.3 } },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: true,
};

const ProfIntroSection = () => {
  const [ready, setReady] = useState(false);

  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setReady(true);
  }, []);

  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      {/* Subtle particle layer */}
      <Particles
        id="prof-particles"
        init={initParticles}
        options={particlesOptions}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-3">
            Meet the Professor
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Photo + Bio */}
        <div className="grid md:grid-cols-5 gap-8 items-start mb-10">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={sunojImage}
              alt="Prof. Raghavan B. Sunoj"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          <motion.div
            className="md:col-span-3 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-md font-semibold text-accent uppercase tracking-widest mb-2">
              Professor of Chemistry
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-2 text-foreground">
              Prof. Raghavan B. Sunoj
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Department of Chemistry, IIT Bombay &nbsp;·&nbsp; Convenor, HPC @ IITB
              &nbsp;·&nbsp; Associate Faculty, C-MInDS
            </p>
            <p className="text-foreground text-base leading-relaxed mb-6">
              Prof. Sunoj leads one of India's foremost computational chemistry groups, blending quantum
              mechanics, machine learning, and data-driven tools to decode the molecular origins of
              selectivity in catalysis. His research has shaped how chemists understand asymmetric
              reactions and has trained an entire generation of computational chemists across India.
            </p>
            <Link
              to="/prof-rbs"
              className="self-start inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-sm group tracking-tighter"
            >
              Full Profile
              <div className="bg-white rounded-full text-accent p-1.5 transition-transform group-hover:translate-x-1">
                <ChevronRight size={14} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Research + Pedagogic Highlights */}
        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map(({ category, icon: Icon, items }, ci) => (
            <motion.div
              key={category}
              className="bg-card border border-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={20} className="text-accent" />
                <h4 className="text-md font-semibold text-accent uppercase tracking-widests">{category} Highlights</h4>
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Award size={13} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-base text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfIntroSection;
