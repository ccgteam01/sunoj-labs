import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Atom, Leaf, BrainCircuit, FlaskConical, Server, Code } from "lucide-react";
import { useResearchAreas, useCollaborators } from "@/hooks/use-sanity";
import generalResearch from "@/assets/gen-res.jpg";

const iconMap: Record<string, any> = { Atom, FlaskConical, Leaf, BrainCircuit };

const fallbackSections = [
  { icon: "Atom", title: "Asymmetric Multi-Catalytic Reactions", description: "Asymmetric reactions involving transition metal catalysts and organocatalysts. Origin of enantioselectivity and catalyst design.", focusAreas: ["Cooperative dual catalysis", "Stereodivergent reactions", "Transition state modeling", "Enantioselectivity prediction"] },
  { icon: "FlaskConical", title: "Mechanistic Studies on C-H Bond Activation Reaction", description: "Role of additives and solvents. Rational modifications to catalysts and substrates.", focusAreas: ["C–H functionalization", "Cross-coupling mechanisms", "Hydroformylation of cyclopropenes", "Organometallic intermediates"] },
  { icon: "BrainCircuit", title: "Machine Learning in Catalysis", description: "Prediction of reaction outcome. Artificial intelligence (AI)-enabled catalyst design.", focusAreas: ["Molecular descriptors", "Enantioselectivity prediction", "Catalyst screening", "Hybrid DFT + ML workflows"] },
];

const fallbackCollaborators = [
  { name: "Prof. D. Maiti", institution: "Indian Institute of Technology Bombay", topic: "Mechanistic Studies on Palladium Catalyzed C-H Bond Activation Reactions" },
  { name: "Prof. Sivaguru Jayaraman", institution: "North Dakota State University, USA", topic: "Chiral induction in photoexcited molecules and reactivity" },
  { name: "Prof. Dean F. Toste", institution: "University of California Berkeley, USA", topic: "Chiral Counterions in Chiral Induction in C-C Bond Forming Reactions" },
  { name: "Prof. Anat Milo", institution: "Ben-Gurion University of the Negev, Israel", topic: "Design of Catalysts for Asymmetric Reactions" },
  { name: "Prof. Jeremy Harvey", institution: "KU Leuven Belgium", topic: "Toward Accurate Estimates of Reaction Energetics" },
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

      <section id="general" className="py-24 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            General <span className="font-serif italic">Research</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">Overview of our research activities</p>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
  <img src={generalResearch} alt="General Research" className="w-full rounded-lg" />
</div>

        </div>
      </section>

      <section id="collaborative" className="py-24 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            Collaborative <span className="font-serif italic">Research</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">We actively collaborate with leading experimental and computational groups worldwide.</p>
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

      <section id="resources" className="py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            <span className="font-serif italic">Resources</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">Computational infrastructure and software tools</p>
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
