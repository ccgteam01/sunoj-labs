import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Award, GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import sunojImage from "@/assets/sunoj-sir.jpg";

const ProfessorProfile = () => {
  return (
    <PageLayout>
      <PageHero
        tagline="Principal Investigator"
        title="Prof. Raghavan B. Sunoj"
        description="Convenor for High Performance Computing @ IITB, and Associate Faculty at Centre for Machine Intelligence and Data Science (C-MInDS)"
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />

      <section className="py-24 bg-background">
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
            <SectionHeading title="Academic Background" />
            <div className="bg-card rounded-xl p-8 border border-border">
              <table className="w-full">
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
              <p className="text-sm text-muted-foreground mt-4">*Advisor: Professor J. Chandrasekhar</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <SectionHeading title="Professional Experience" />
            <div className="bg-card rounded-xl p-8 border border-border">
              <table className="w-full">
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
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Awards and Distinctions" />
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="space-y-4">
                {[
                  "National Award to Teachers (Higher Education), 2023.",
                  "Associate Editor, The Journal of Organic Chemistry, a leading journal published by the American Chemical Society (2023-till date).",
                  "Member of the Editorial Advisory Board of Journal of Computational Chemistry, published by Wiley (2025-till date).",
                  "Member of the Editorial Advisory Board of 'Chem', a flagship journal published by Cell press (2023-till date).",
                  "Fellow of the National Academy of Sciences, India. 2021.",
                  "Member of the Editorial Board of 'Chemical Society Reviews', a flagship journal published by the Royal Society of Chemistry (2021-till date).",
                  "Prof. S.C. Bhattacharya Award for Excellence in Pure Sciences, IIT Bombay (2020).",
                  "Member of IUPAC Subcommittee on Structural and Mechanistic Chemistry, (2020-)",
                  "Shanti Swarup Bhatnagar Prize in Chemical Sciences 2019.",
                  "Elected Member of Board of the Asia Pacific Association of Theoretical and Computational Chemists (APATCC), (2019-)",
                  "Member of the Editorial Advisory Board of 'Chemical Science', a flagship journal of the Royal Society of Chemistry (June 2019-2021).",
                  "Editorial Board, 'WIREs Computational Molecular Science', a leading journal, published by Wiley (2018-2023).",
                  "Member of the Editorial Advisory Board of 'ACS Catalysis', a leading journal, published by the American Chemical Society (2018-2022).",
                  "IIT Bombay Research Award, 2017.",
                  "Prof. S. P. Sukhatme Excellence in Teaching Award, IIT Bombay, 2017.",
                  "Organizing Chair, 8th Asia Pacific Conference of Theoretical and Computational Chemistry, IIT Bombay, 2017.",
                  "Institute Chair Professor, June 2017- June 2020.; Class of 1998 Chair in Quantum Computing (July 2020-June 2023); Google Cloud Chair Professor (June 2024-June 2027).",
                  "The 30th Annual Charles A. Coulson Lecture, The Center for Computational Quantum Chemistry and Department of Chemistry, University of Georgia, Athens, GA, USA (February, 2017).",
                  "Member of the Editorial Advisory Board of 'Organic Letters', a leading journal published by the American Chemical Society (Since 2017).",
                  "Fellow of the Indian Academy of Sciences, Bangalore, 2017.",
                  "A.V. Ramarao Research Foundation Prize Lecture, Javaharlal Nehru Center for Advanced Scientific Research (JNCASR), Bangalore, 2017.",
                  "Fellow of the Royal Society of Chemistry (leaders in the field), 2015.",
                  "Member of the Editorial Advisory Board, Resonance - Journal of Science Education, Published jointly by the Indian Academy of Sciences and Springer, 2013-2018.",
                  "Elected to the board of World Association of Theoretical and Computational Chemists (WATOC), 2014.",
                  "Chemical Research Society of India Bronze Medal (2014) in Recognition of the Contributions to Research in Chemistry.",
                  "A.V. Ramarao Research Foundation Young Scientist Award 2011.",
                  "Industrial Research and Consultancy (IRCC-IIT Bombay) Best Research Paper Award 2011",
                  "IIT Bombay 'Excellence in Teaching' Award 2009.",
                  "National Academy of Sciences India Young Scientist Platinum Jubilee Award 2008.",
                  "IIT Bombay Young Investigator Award 2006.",
                  "Associateship of the Indian Academy of Sciences (IAS) Bangalore, 2006.",
                  "Indian National Science Academy (INSA) Medal for Young Scientist, 2006.",
                  "Chemical Research Society of India (CRSI) Young Scientist Award 2006",
                  "Best PhD thesis award, 2001, Department of Organic Chemistry, Indian Institute of Science, Bangalore.",
                  "Gold Medallist in M. Sc. (Chemistry), 1996, University of Kerala.",
                  "K. R. Krishna Iyer Memorial Gold medal for outstanding academic achievements for the year 1996, University of Kerala.",
                ].map((award, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award size={16} className="text-gold shrink-0 mt-1" />
                    <p className="text-foreground text-sm">{award}</p>
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

export default ProfessorProfile;
