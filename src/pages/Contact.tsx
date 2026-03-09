import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Mail, MapPin, ExternalLink, GraduationCap, Microscope, BookOpen, ChevronRight } from "lucide-react";

const contact = {
  email: "sunoj@chem.iitb.ac.in",
  address: "RBS Group (Prof. R. B. Sunoj)\nDepartment of Chemistry, 3rd Floor, Room 418-A\nIndian Institute of Technology Bombay\nPowai, Mumbai 400076, India",
  googleScholarUrl: "https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en",
  githubUrl: "https://github.com/Sunojlab",
  officialWebsiteUrl: "https://www.chem.iitb.ac.in/~sunoj/",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d426.0536574630531!2d72.9174189614062!3d19.130447145577058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f46befb6e3%3A0xedc173862dc9f4e3!2sDepartment%20of%20Chemistry%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1770665742966!5m2!1sen!2sin"
};

const iconMap: Record<string, any> = { GraduationCap, Microscope, BookOpen };

const opportunities = [
  { icon: "GraduationCap", title: "PhD Positions (IIT Bombay)", description: "Through GATE / CSIR-NET / direct PhD admission to the Department of Chemistry." },
  { icon: "Microscope", title: "Postdoctoral Fellowships", description: "Funded positions for independent researchers in computational chemistry & ML." },
  { icon: "BookOpen", title: "Research Internships", description: "Short-term project-based positions for motivated students." },
];

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#positions") {
      const element = document.getElementById("positions");
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <PageLayout>
      <PageHero 
        title="Contact Us" 
        description="Connect with the RBS Group at IIT Bombay. We welcome inquiries about research collaborations, publications, and open positions." 
      />

      {/* Open Positions */}
      <section id="positions" className="py-12 bg-background scroll-mt-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            Join the RBS Group
          </h2>
          <p className="text-center text-muted-foreground mb-8">We are always interested in highly motivated candidates with backgrounds in organic chemistry, physical chemistry, computational modeling, and data science for chemistry.</p>

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

          {/* Contact Information */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-heading font-bold mb-6">Get in Touch</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0"><Mail size={20} /></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-sm text-accent hover:underline">{contact.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0"><MapPin size={20} /></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0"><ExternalLink size={20} /></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Resources</p>
                    <div className="flex flex-col gap-1">
                      <a href={contact.googleScholarUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Google Scholar</a>
                      <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">GitHub — Sunojlab</a>
                      <a href={contact.officialWebsiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Official Group Website</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl overflow-hidden border border-border">
              <iframe title="IIT Bombay Location" src={contact.mapEmbedUrl} width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
