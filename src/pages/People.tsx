import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { User, ArrowRight } from "lucide-react";

const doctoralStudents = [
  { name: "Shilpa S.", topic: "Transition Metal Catalysis & Hydroformylation" },
  { name: "Akhil Changotra", topic: "Noncovalent Interactions in Catalysis" },
  { name: "Saikat Ghosh", topic: "Enantioselectivity in Desymmetrization" },
  { name: "Purushothaman A.", topic: "Asymmetric Hydroformylation Mechanisms" },
];

const alumniHighlights = [
  { name: "Dr. Bangaru Bhaskararao", current: "Postdoctoral Fellow", topic: "Cooperative dual catalysis, stereodivergent reactions" },
  { name: "Dr. Garima Jindal", current: "Assistant Professor, IISc Bangalore", topic: "Computational catalysis" },
  { name: "Dr. Rositha Kuniyil", current: "Assistant Professor, IIT Palakkad", topic: "CO₂ activation, transition metal catalysis" },
  { name: "Dr. Dilna B. Sreedhar", current: "Researcher", topic: "Pd-catalyzed allylic amination" },
];

const People = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <SectionHeading title="Our Team" center />

        {/* PI */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary rounded-xl p-8 md:p-10 text-center mb-16">
          <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={36} />
          </div>
          <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-1">Prof. Raghavan B. Sunoj</h3>
          <p className="text-primary-foreground/70 mb-2">Professor, Department of Chemistry, IIT Bombay</p>
          <p className="text-primary-foreground/50 text-sm">National Teacher Award 2023 · Shanti Swarup Bhatnagar Prize 2013</p>
        </motion.div>

        {/* Current Members */}
        <div className="mb-16">
          <h3 className="text-xl font-heading font-bold mb-6">Current Doctoral Researchers</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {doctoralStudents.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border card-hover">
                <h4 className="font-heading font-bold text-foreground">{s.name}</h4>
                <p className="text-sm text-accent font-medium mt-1">{s.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alumni */}
        <div className="mb-16">
          <h3 className="text-xl font-heading font-bold mb-6">Notable Alumni</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {alumniHighlights.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-6 border border-border card-hover">
                <h4 className="font-heading font-bold text-foreground">{a.name}</h4>
                <p className="text-sm text-accent font-medium mt-1">{a.current}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-xl p-8 text-center">
          <h3 className="text-xl font-heading font-bold mb-3">Alumni Network</h3>
          <p className="text-muted-foreground mb-6">
            Our alumni have moved on to leading roles in academia, industry, and global research institutes worldwide.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default People;
