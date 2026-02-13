import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Mail, GraduationCap, Microscope, BookOpen, ChevronRight } from "lucide-react";
import { useOpportunities } from "@/hooks/use-sanity";

const iconMap: Record<string, any> = { GraduationCap, Microscope, BookOpen };

const fallbackOpportunities = [
  { icon: "GraduationCap", title: "PhD Positions (IIT Bombay)", description: "Through GATE / CSIR-NET / direct PhD admission to the Department of Chemistry." },
  { icon: "Microscope", title: "Postdoctoral Fellowships", description: "Funded positions for independent researchers in computational chemistry & ML." },
  { icon: "BookOpen", title: "Research Internships", description: "Short-term project-based positions for motivated students." },
];

const OpenPositions = () => {
  const { data: opportunities } = useOpportunities(fallbackOpportunities);

  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="Join the CCML Group" subtitle="We are always interested in highly motivated candidates with backgrounds in organic chemistry, physical chemistry, computational modeling, and data science for chemistry." />

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {opportunities.map((o: any, i: number) => {
              const IconComponent = iconMap[o.icon] || GraduationCap;
              return (
                <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{o.title}</h3>
                  <p className="text-sm text-muted-foreground">{o.description || o.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary rounded-xl p-8 md:p-10 text-center">
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">How to Apply</h3>
            <p className="text-primary-foreground/80 mb-6">Email your CV and research interests to:</p>
            <a href="mailto:sunoj@chem.iitb.ac.in" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-accent font-semibold rounded-full shadow-lg hover:bg-white/90 transition-colors text-lg group tracking-tighter">
              sunoj@chem.iitb.ac.in
              <div className="bg-accent rounded-full text-white p-2 transition-transform group-hover:translate-x-1">
                <ChevronRight size={25} />
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OpenPositions;
