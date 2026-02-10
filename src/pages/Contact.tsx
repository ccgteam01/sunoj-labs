import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { useContactInfo } from "@/hooks/use-sanity";

const fallbackContact = {
  email: "sunoj@chem.iitb.ac.in",
  address: "CCML Group (Prof. R. B. Sunoj)\nDepartment of Chemistry, 3rd Floor, Room 418-A\nIndian Institute of Technology Bombay\nPowai, Mumbai 400076, India",
  googleScholarUrl: "https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en",
  githubUrl: "https://github.com/Sunojlab",
  officialWebsiteUrl: "https://www.chem.iitb.ac.in/~sunoj/",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d426.0536574630531!2d72.9174189614062!3d19.130447145577058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f46befb6e3%3A0xedc173862dc9f4e3!2sDepartment%20of%20Chemistry%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1770665742966!5m2!1sen!2sin"
}

const Contact = () => {
  const { data: contact } = useContactInfo(fallbackContact);

  return (
    <PageLayout>
      <PageHero
        tagline="Get in Touch"
        title="Contact Us"
        description="Connect with the CCML Group at IIT Bombay. We welcome inquiries about research collaborations, publications, and open positions."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />
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
