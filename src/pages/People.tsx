import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { User, ArrowRight, ChevronRight } from "lucide-react";
import { usePeople } from "@/hooks/use-sanity";

const fallbackPeople = [
  { name: "Prof. Raghavan B. Sunoj", role: "pi", topic: "Professor, Department of Chemistry, IIT Bombay", currentPosition: "National Teacher Award 2023 · Shanti Swarup Bhatnagar Prize 2013 · J. C. Bose Fellow", order: 0 },
  { name: "Shilpa S.", role: "doctoral", topic: "Transition Metal Catalysis & Hydroformylation", order: 1 },
  { name: "Akhil Changotra", role: "doctoral", topic: "Reactivity of Diazo Compounds & C–H Insertion", order: 2 },
  { name: "Saikat Ghosh", role: "doctoral", topic: "Noncovalent Interactions in Enantioselective Reactions", order: 3 },
  { name: "Purushothaman A.", role: "doctoral", topic: "Asymmetric Hydroformylation Mechanisms", order: 4 },
  { name: "Dr. Bangaru Bhaskararao", role: "alumni", topic: "Cooperative dual catalysis, stereodivergent reactions (JACS 2015, Chem. Sci. 2018)", currentPosition: "Postdoctoral Researcher", order: 5 },
  { name: "Dr. Garima Jindal", role: "alumni", topic: "Computational catalysis", currentPosition: "Assistant Professor, IISc Bangalore", order: 6 },
  { name: "Dr. Rositha Kuniyil", role: "alumni", topic: "CO₂ activation, transition metal catalysis", currentPosition: "Assistant Professor, IIT Palakkad", order: 7 },
  { name: "Dr. Akhil Changotra", role: "alumni", topic: "Reactivity predictions, DFT methods", currentPosition: "Researcher", order: 8 },
  { name: "Dr. Dilna B. Sreedhar", role: "alumni", topic: "Pd-catalyzed allylic amination, serial ligand catalysis", currentPosition: "Researcher", order: 9 },
];

const People = () => {
  const { data: people } = usePeople(fallbackPeople);

  const pi = useMemo(() => people.find((p: any) => p.role === "pi"), [people]);
  const doctoral = useMemo(() => people.filter((p: any) => p.role === "doctoral"), [people]);
  const alumni = useMemo(() => people.filter((p: any) => p.role === "alumni"), [people]);

  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group"
        title="Our Team"
        description="Meet the researchers driving innovation in computational chemistry and machine learning at IIT Bombay."
        ctaText="Join Our Team"
        ctaLink="/positions"
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          {pi && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary rounded-xl p-8 md:p-10 text-center mb-16">
              <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={36} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-1">{pi.name}</h3>
              <p className="text-primary-foreground/70 mb-2">{pi.topic}</p>
              <p className="text-primary-foreground/50 text-sm mb-6">{pi.currentPosition}</p>
              <Link to="/professor" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-accent font-semibold rounded-full shadow-lg hover:bg-white/90 transition-colors text-lg group tracking-tighter">
                See More Details
                <div className="bg-accent rounded-full text-white p-2 transition-transform group-hover:translate-x-1">
                  <ChevronRight size={25} />
                </div>
              </Link>
            </motion.div>
          )}

          {doctoral.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-heading font-bold mb-6">Current Doctoral Researchers</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {doctoral.map((s: any, i: number) => (
                  <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="font-heading font-bold text-foreground">{s.name}</h4>
                    <p className="text-sm text-accent font-medium mt-1">{s.topic}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {alumni.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-heading font-bold mb-6">Notable Alumni</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {alumni.map((a: any, i: number) => (
                  <motion.div key={a.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="font-heading font-bold text-foreground">{a.name}</h4>
                    <p className="text-sm text-accent font-medium mt-1">{a.currentPosition}</p>
                    <p className="text-xs text-muted-foreground mt-1">{a.topic}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-xl p-8 text-center">
            <h3 className="text-xl font-heading font-bold mb-3">Alumni Network</h3>
            <p className="text-muted-foreground mb-6">Our alumni have moved on to leading roles in academia, industry, and global research institutes worldwide.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default People;
