import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Atom, Leaf, BrainCircuit, FlaskConical, Server, Code } from "lucide-react";
import { useResearchAreas, useCollaborators } from "@/hooks/use-sanity";

const iconMap: Record<string, any> = { Atom, FlaskConical, Leaf, BrainCircuit };

const fallbackSections = [
  { icon: "Atom", title: "Asymmetric Multi-Catalytic Reactions", description: "Asymmetric reactions involving transition metal and organo-catalysts are investigated using density functional theory (DFT) methods. We study cooperative, relay, and sequential catalytic strategies for enantioselective synthesis and explore how two or more chiral catalysts work in tandem to achieve stereodivergent outcomes.", focusAreas: ["Cooperative dual catalysis", "Stereodivergent reactions", "Transition state modeling", "Enantioselectivity prediction"] },
  { icon: "FlaskConical", title: "Transition Metal Catalysis & C–H Activation", description: "We investigate mechanistic pathways of Pd, Rh, Ir, and Mn catalyzed reactions including C–H activation, cross-coupling, and hydroformylation. Understanding the role of directing groups, ligand effects, and selectivity in these transformations is central to our work.", focusAreas: ["C–H functionalization", "Cross-coupling mechanisms", "Hydroformylation of cyclopropenes", "Organometallic intermediates"] },
  { icon: "Leaf", title: "Organocatalysis & Noncovalent Interactions", description: "We explore how noncovalent interactions — hydrogen bonds, CH–π, lone pair–π, and dispersion forces — control stereoselectivity in organocatalytic reactions. Our studies reveal the crucial role these weak forces play in asymmetric catalysis.", focusAreas: ["Proline catalysis", "Cinchona-thiourea dual catalysis", "Stereoselectivity origins", "Noncovalent interaction analysis"] },
  { icon: "BrainCircuit", title: "Machine Learning in Molecular Discovery", description: "We develop unified machine-learning protocols for asymmetric catalysis using molecular descriptors. Our ML approaches provide sustainable models trained on known catalysts to predict enantioselectivity and guide catalyst design for new reactions.", focusAreas: ["Molecular descriptors", "Enantioselectivity prediction", "Catalyst screening", "Hybrid DFT + ML workflows"] },
];

const fallbackCollaborators = [
  { name: "Prof. Erick M. Carreira", institution: "ETH Zurich, Switzerland", topic: "Noncovalent interactions in enantioselective reactions" },
  { name: "Prof. Xumu Zhang", institution: "Southern Univ. of Science & Technology (SUSTech), China", topic: "Asymmetric hydroformylation" },
  { name: "Prof. Debabrata Maiti", institution: "IIT Bombay, India", topic: "meta-C–H activation, directing groups" },
  { name: "Prof. Xile Hu", institution: "EPFL, Switzerland", topic: "Transition metal catalysis" },
  { name: "Prof. Huw M. L. Davies", institution: "Emory University, USA", topic: "Diazo compound reactivity" },
  { name: "Prof. Haridasan B. Singh", institution: "IIT Bombay, India", topic: "Organoselenium & organochalcogen chemistry" },
];

const Research = () => {
  const { data: sections } = useResearchAreas(fallbackSections);
  const { data: collaborators } = useCollaborators(fallbackCollaborators);

  return (
    <PageLayout>
      <PageHero
        tagline="Computational Chemistry · Machine Learning"
        title="Research Areas"
        description="Our research spans computational mechanistic chemistry, transition metal and organocatalysis, and machine learning-driven molecular discovery."
        ctaText="View Publications"
        ctaLink="/publications"
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />
      <section id="specifics" className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-12">
            {sections.map((s: any, i: number) => {
              const IconComponent = iconMap[s.icon] || Atom;
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-xl p-8 md:p-10 border border-border card-hover">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">{s.description || s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {(s.focusAreas || s.focus || []).map((f: string) => (
                          <span key={f} className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-full">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="general" className="py-24 bg-secondary">
        <div className="container max-w-5xl">
          <SectionHeading title="General Research" subtitle="Overview of our research activities" center />
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>Content coming soon...</p>
          </div>
        </div>
      </section>

      <section id="collaborative" className="py-24 bg-background">
        <div className="container max-w-5xl">
          <SectionHeading title="Collaborative Research" subtitle="We actively collaborate with leading experimental and computational groups worldwide." center />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((c: any, i: number) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl p-6 border border-border card-hover">
                <h4 className="font-heading font-bold text-foreground mb-1">{c.name}</h4>
                <p className="text-sm text-accent font-medium mb-2">{c.institution || c.inst}</p>
                <p className="text-xs text-muted-foreground">{c.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title="Resources" subtitle="Computational infrastructure and software tools" center />
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Hardware</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We use IIT Bombay supercomputing facility (<a href="http://spacetime.iitb.ac.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://spacetime.iitb.ac.in</a>) besides a few true 64-bit Itanium 2 servers.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Software</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Gaussian 09 (Linda TCP)</li>
                <li>• CPMD</li>
                <li>• GAMESS</li>
                <li>• AOMIX</li>
                <li>• NBO 5.0</li>
                <li>• AIM 2000</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
