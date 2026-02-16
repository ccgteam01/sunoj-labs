import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Award, GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import sunojImage from "@/assets/sunoj-sir.jpg";
import { useAwards } from "@/hooks/use-sanity";

const ProfRBS = () => {
  const { data: awards } = useAwards([]);
  return (
    <PageLayout>
      <section className="pt-32 pb-12 bg-background">
        <div className="container max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tighter mb-2">Prof. Raghavan B. Sunoj</h1>
          <p className="text-lg text-muted-foreground">Convenor for High Performance Computing @ IITB, and Associate Faculty at Centre for Machine Intelligence and Data Science (C-MInDS)</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <img src={sunojImage} alt="Prof. Raghavan B. Sunoj" className="w-full rounded-xl shadow-lg" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-heading font-bold mb-4">Contact Information</h2>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-accent mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground">Department of Chemistry</p>
                      <p className="text-foreground">Indian Institute of Technology Bombay</p>
                      <p className="text-foreground">Powai, Mumbai 400076</p>
                      <p className="text-foreground">INDIA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-accent shrink-0" />
                    <p className="text-foreground">22-2576-7173</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-accent shrink-0" />
                    <div>
                      <p className="text-foreground">sunoj[at]chem.iitb.ac.in</p>
                      <p className="text-foreground">rbsunoj[at]iitb.ac.in</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Academic Background
            </h2>
            <div className="bg-card rounded-xl p-4 md:p-8 border border-border">
              {/* Desktop Table */}
              <table className="w-full hidden md:table">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Degree</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">University/Institute</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground">M.Sc.</td>
                    <td className="py-3 px-4 text-muted-foreground">University of Kerala</td>
                    <td className="py-3 px-4 text-muted-foreground">1996</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground">Ph.D</td>
                    <td className="py-3 px-4 text-muted-foreground">Indian Institute of Science Bangalore</td>
                    <td className="py-3 px-4 text-muted-foreground">2001*</td>
                  </tr>
                </tbody>
              </table>
              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground mb-2">M.Sc.</div>
                  <div className="text-sm text-muted-foreground mb-1">University of Kerala</div>
                  <div className="text-sm text-muted-foreground">1996</div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground mb-2">Ph.D</div>
                  <div className="text-sm text-muted-foreground mb-1">Indian Institute of Science Bangalore</div>
                  <div className="text-sm text-muted-foreground">2001*</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">*Advisor: Professor J. Chandrasekhar</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Professional Experience
            </h2>
            <div className="bg-card rounded-xl p-4 md:p-8 border border-border">
              {/* Desktop Table */}
              <table className="w-full hidden md:table">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Employment</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">University/Institute</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground">Post Doctoral Research Associate</td>
                    <td className="py-3 px-4 text-muted-foreground">The Ohio State University, Columbus</td>
                    <td className="py-3 px-4 text-muted-foreground">2001-2003</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground">Assistant Professor</td>
                    <td className="py-3 px-4 text-muted-foreground">IIT Bombay</td>
                    <td className="py-3 px-4 text-muted-foreground">2003</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground">Associate Professor</td>
                    <td className="py-3 px-4 text-muted-foreground">IIT Bombay</td>
                    <td className="py-3 px-4 text-muted-foreground">2007</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground">Professor</td>
                    <td className="py-3 px-4 text-muted-foreground">IIT Bombay</td>
                    <td className="py-3 px-4 text-muted-foreground">2012</td>
                  </tr>
                </tbody>
              </table>
              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground mb-2">Post Doctoral Research Associate</div>
                  <div className="text-sm text-muted-foreground mb-1">The Ohio State University, Columbus</div>
                  <div className="text-sm text-muted-foreground">2001-2003</div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground mb-2">Assistant Professor</div>
                  <div className="text-sm text-muted-foreground mb-1">IIT Bombay</div>
                  <div className="text-sm text-muted-foreground">2003</div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground mb-2">Associate Professor</div>
                  <div className="text-sm text-muted-foreground mb-1">IIT Bombay</div>
                  <div className="text-sm text-muted-foreground">2007</div>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground mb-2">Professor</div>
                  <div className="text-sm text-muted-foreground mb-1">IIT Bombay</div>
                  <div className="text-sm text-muted-foreground">2012</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Awards and Distinctions
            </h2>
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="space-y-4">
                {awards.map((award: any, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award size={16} className="text-gold shrink-0 mt-1" />
                    <p className="text-foreground text-sm">{award.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProfRBS;
