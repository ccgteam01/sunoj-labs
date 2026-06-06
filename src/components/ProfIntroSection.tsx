import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, BookOpen, Users, FlaskConical, ChevronRight } from "lucide-react";
import sunojImage from "@/assets/sunoj-sir.jpg";

const stats = [
  { icon: BookOpen, value: "200+", label: "Publications" },
  { icon: GraduationCap, value: "30+", label: "PhD Students Mentored" },
  { icon: Users, value: "5000+", label: "Students Taught" },
  { icon: FlaskConical, value: "20+", label: "Years at IIT Bombay" },
];

const highlights = [
  { category: "Research", items: [
    "Pioneer in computational asymmetric catalysis",
    "Transition metal-catalyzed reaction mechanisms",
    "Machine learning for chemical prediction",
    "200+ peer-reviewed publications, 7000+ citations",
  ]},
  { category: "Pedagogy", items: [
    "Teaching graduate courses in organic chemistry since 2003",
    "Trained 30+ PhD and 40+ M.Sc. students",
    "Taught 5000+ undergraduate students across core chemistry courses",
    "Developed advanced curriculum in computational chemistry at IIT Bombay",
  ]},
];

const ProfIntroSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
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
      <div className="grid lg:grid-cols-5 gap-12 mb-16 items-start">
        <motion.div
          className="lg:col-span-2"
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
          className="lg:col-span-3 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Professor of Chemistry
          </p>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-2 text-foreground">
            Prof. Raghavan B. Sunoj
          </h3>
          <p className="text-muted-foreground text-base mb-6">
            Department of Chemistry, IIT Bombay &nbsp;·&nbsp; Convenor, High Performance Computing @ IITB
            &nbsp;·&nbsp; Associate Faculty, C-MInDS
          </p>
          <p className="text-foreground text-lg leading-relaxed mb-8">
            Prof. Sunoj leads one of India's foremost computational chemistry groups, blending quantum
            mechanics, machine learning, and data-driven tools to decode the molecular origins of
            selectivity in catalysis. His research has shaped how chemists understand asymmetric
            reactions and has trained an entire generation of computational chemists across India.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-4 text-center"
              >
                <Icon size={20} className="text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold tracking-tighter text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground leading-tight mt-1">{label}</div>
              </div>
            ))}
          </div>

          <Link
            to="/prof-rbs"
            className="self-start inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-base group tracking-tighter"
          >
            Full Profile
            <div className="bg-white rounded-full text-accent p-1.5 transition-transform group-hover:translate-x-1">
              <ChevronRight size={16} />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Research + Pedagogic Highlights */}
      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map(({ category, items }, ci) => (
          <motion.div
            key={category}
            className="bg-card border border-border rounded-2xl p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              {ci === 0
                ? <FlaskConical size={22} className="text-accent" />
                : <GraduationCap size={22} className="text-accent" />}
              <h4 className="text-xl font-semibold tracking-tight">{category} Highlights</h4>
            </div>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Award size={14} className="text-gold shrink-0 mt-1" />
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProfIntroSection;
