import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Mail, GraduationCap, Microscope, BookOpen } from "lucide-react";

const opportunities = [
  { icon: GraduationCap, title: "PhD Positions (IIT Bombay)", desc: "Through GATE / CSIR-NET / direct PhD admission." },
  { icon: Microscope, title: "Postdoctoral Fellowships", desc: "Funded positions for independent researchers." },
  { icon: BookOpen, title: "Research Internships", desc: "Short-term project-based positions for motivated students." },
];

const OpenPositions = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading
          title="Join the Sunoj Research Group"
          subtitle="We are always interested in highly motivated candidates with backgrounds in organic chemistry, physical chemistry, computational modeling, and data science for chemistry."
        />

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {opportunities.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-hover text-center"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <o.icon size={24} />
              </div>
              <h3 className="font-heading font-bold mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground">{o.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-xl p-8 md:p-10 text-center"
        >
          <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
            How to Apply
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Email your CV and research interests to:
          </p>
          <a
            href="mailto:sunoj@chem.iitb.ac.in"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Mail size={18} /> sunoj@chem.iitb.ac.in
          </a>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default OpenPositions;
