import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading title="Contact Us" center />
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading font-bold mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:sunoj@chem.iitb.ac.in" className="text-sm text-accent hover:underline">sunoj@chem.iitb.ac.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    CCML Group (Prof. R. B. Sunoj)<br />
                    Department of Chemistry, 3rd Floor, Room 418-A<br />
                    Indian Institute of Technology Bombay<br />
                    Powai, Mumbai 400076, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Resources</p>
                  <div className="flex flex-col gap-1">
                    <a href="https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Google Scholar</a>
                    <a href="https://github.com/Sunojlab" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">GitHub — Sunojlab</a>
                    <a href="https://www.chem.iitb.ac.in/~sunoj/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Official Group Website</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl overflow-hidden border border-border">
            <iframe
              title="IIT Bombay Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8580600855957!2d72.91378687508377!3d19.130027982084895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f393a5b7cf%3A0x1c8e0a0ad7539c8d!2sIIT%20Bombay!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Contact;
