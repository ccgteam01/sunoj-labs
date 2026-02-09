import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Atom, Leaf, BrainCircuit } from "lucide-react";

const sections = [
  {
    icon: Atom,
    title: "Mechanistic Pathways in Organic Chemistry",
    desc: "We investigate reaction mechanisms at the molecular level, enabling deeper understanding of reactivity and selectivity in modern organic synthesis.",
    focus: ["Transition states", "Stereoselectivity", "Reactive intermediates"],
  },
  {
    icon: Leaf,
    title: "Catalysis and Sustainable Transformations",
    desc: "Catalysis remains central to green chemistry. We model catalytic cycles and design strategies for improved efficiency and sustainability.",
    focus: ["Asymmetric catalysis", "Organometallic systems", "Industrially relevant reactions"],
  },
  {
    icon: BrainCircuit,
    title: "Emerging AI in Molecular Discovery",
    desc: "We explore how machine learning and data-driven tools can complement theoretical chemistry for faster discovery.",
    focus: ["Reaction prediction", "Catalyst screening", "Hybrid AI + quantum workflows"],
  },
];

const Research = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <SectionHeading
          title="Research Areas"
          subtitle="Our research spans computational mechanistic chemistry, catalysis design, and AI-driven molecular discovery."
          center
        />
        <div className="flex flex-col gap-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl p-8 md:p-10 border border-border card-hover"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                  <s.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.focus.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Research;
