import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Atom, Leaf, BrainCircuit, FlaskConical } from "lucide-react";

const sections = [
  {
    icon: Atom,
    title: "Asymmetric Multi-Catalytic Reactions",
    desc: "Asymmetric reactions involving transition metal and organo-catalysts are investigated using density functional theory (DFT) methods. We study cooperative, relay, and sequential catalytic strategies for enantioselective synthesis and explore how two or more chiral catalysts work in tandem to achieve stereodivergent outcomes.",
    focus: ["Cooperative dual catalysis", "Stereodivergent reactions", "Transition state modeling", "Enantioselectivity prediction"],
  },
  {
    icon: FlaskConical,
    title: "Transition Metal Catalysis & C–H Activation",
    desc: "We investigate mechanistic pathways of Pd, Rh, Ir, and Mn catalyzed reactions including C–H activation, cross-coupling, and hydroformylation. Understanding the role of directing groups, ligand effects, and selectivity in these transformations is central to our work.",
    focus: ["C–H functionalization", "Cross-coupling mechanisms", "Hydroformylation of cyclopropenes", "Organometallic intermediates"],
  },
  {
    icon: Leaf,
    title: "Organocatalysis & Noncovalent Interactions",
    desc: "We explore how noncovalent interactions — hydrogen bonds, CH–π, lone pair–π, and dispersion forces — control stereoselectivity in organocatalytic reactions. Our studies reveal the crucial role these weak forces play in asymmetric catalysis.",
    focus: ["Proline catalysis", "Cinchona-thiourea dual catalysis", "Stereoselectivity origins", "Noncovalent interaction analysis"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning in Molecular Discovery",
    desc: "We develop unified machine-learning protocols for asymmetric catalysis using molecular descriptors. Our ML approaches provide sustainable models trained on known catalysts to predict enantioselectivity and guide catalyst design for new reactions.",
    focus: ["Molecular descriptors", "Enantioselectivity prediction", "Catalyst screening", "Hybrid DFT + ML workflows"],
  },
];

const collaborators = [
  { name: "Prof. Erick M. Carreira", inst: "ETH Zurich, Switzerland", topic: "Noncovalent interactions in enantioselective reactions" },
  { name: "Prof. Xumu Zhang", inst: "Southern Univ. of Science & Technology (SUSTech), China", topic: "Asymmetric hydroformylation" },
  { name: "Prof. Debabrata Maiti", inst: "IIT Bombay, India", topic: "meta-C–H activation, directing groups" },
  { name: "Prof. Xile Hu", inst: "EPFL, Switzerland", topic: "Transition metal catalysis" },
  { name: "Prof. Huw M. L. Davies", inst: "Emory University, USA", topic: "Diazo compound reactivity" },
  { name: "Prof. Haridasan B. Singh", inst: "IIT Bombay, India", topic: "Organoselenium & organochalcogen chemistry" },
];

const Research = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <SectionHeading
          title="Research Areas"
          subtitle="Our research spans computational mechanistic chemistry, transition metal and organocatalysis, and machine learning-driven molecular discovery."
          center
        />
        <div className="flex flex-col gap-12">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-xl p-8 md:p-10 border border-border card-hover">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                  <s.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.focus.map((f) => (
                      <span key={f} className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Collaborative */}
    <section className="py-24 bg-secondary">
      <div className="container max-w-5xl">
        <SectionHeading title="Collaborative Research" subtitle="We actively collaborate with leading experimental and computational groups worldwide." center />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl p-6 border border-border card-hover">
              <h4 className="font-heading font-bold text-foreground mb-1">{c.name}</h4>
              <p className="text-sm text-accent font-medium mb-2">{c.inst}</p>
              <p className="text-xs text-muted-foreground">{c.topic}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Research;
