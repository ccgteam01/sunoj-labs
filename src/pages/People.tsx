import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { User, ArrowRight } from "lucide-react";

const doctoralStudents = [
  { name: "Aditya Sharma", topic: "Organocatalysis Mechanisms", email: "aditya@chem.iitb.ac.in" },
  { name: "Priya Nair", topic: "Transition Metal Catalysis", email: "priya@chem.iitb.ac.in" },
  { name: "Rahul Verma", topic: "AI in Reaction Prediction", email: "rahul@chem.iitb.ac.in" },
  { name: "Sneha Desai", topic: "Stereoselective Synthesis", email: "sneha@chem.iitb.ac.in" },
];

const postdocs = [
  { name: "Dr. Kavita Joshi", area: "Computational Catalysis" },
  { name: "Dr. Arjun Menon", area: "Machine Learning in Chemistry" },
];

const People = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <SectionHeading title="Our Team" center />

        {/* PI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-xl p-8 md:p-10 text-center mb-16"
        >
          <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={36} />
          </div>
          <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-1">
            Prof. Raghavan B. Sunoj
          </h3>
          <p className="text-primary-foreground/70">Professor, IIT Bombay</p>
        </motion.div>

        {/* Doctoral */}
        <div className="mb-16">
          <h3 className="text-xl font-heading font-bold mb-6">Doctoral Researchers</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {doctoralStudents.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                <h4 className="font-heading font-bold text-foreground">{s.name}</h4>
                <p className="text-sm text-accent font-medium mt-1">{s.topic}</p>
                <p className="text-xs text-muted-foreground mt-2">{s.email}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Postdocs */}
        <div className="mb-16">
          <h3 className="text-xl font-heading font-bold mb-6">Postdoctoral Fellows</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {postdocs.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                <h4 className="font-heading font-bold text-foreground">{p.name}</h4>
                <p className="text-sm text-accent font-medium mt-1">{p.area}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alumni */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-heading font-bold mb-3">Alumni</h3>
          <p className="text-muted-foreground mb-6">
            Our alumni have moved on to leading roles in academia, industry, and global research institutes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            View Alumni Network <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default People;
