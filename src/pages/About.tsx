import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen, FlaskConical, Cpu, Sparkles } from "lucide-react";

const interests = [
  { icon: FlaskConical, label: "Mechanistic organic chemistry" },
  { icon: BookOpen, label: "Catalysis and reaction design" },
  { icon: Cpu, label: "Computational modeling of complex systems" },
  { icon: Sparkles, label: "Predictive approaches in molecular science" },
];

const About = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading title="About the Group" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Sunoj Research Group at the Department of Chemistry, IIT Bombay focuses on understanding chemical reactivity through computational modeling and mechanistic exploration.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our work lies at the intersection of:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8 list-none pl-0">
            {["Organic chemistry", "Quantum chemical theory", "Catalysis", "Machine learning for molecular prediction"].map((item) => (
              <li key={item} className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 text-foreground text-sm font-medium">
                <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We aim to uncover fundamental mechanistic principles that drive selectivity, efficiency, and innovation in chemical transformations.
          </p>
        </motion.div>
      </div>
    </section>

    {/* PI Section */}
    <section className="py-24 bg-secondary">
      <div className="container max-w-4xl">
        <SectionHeading title="Principal Investigator" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 md:p-12 border border-border"
        >
          <h3 className="text-2xl font-heading font-bold mb-1">Prof. Raghavan B. Sunoj</h3>
          <p className="text-accent font-medium mb-6">Professor, Department of Chemistry, IIT Bombay</p>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Research Interests</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {interests.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={20} />
                </div>
                <span className="text-foreground text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default About;
