import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen, FlaskConical, Cpu, Sparkles, Award, GraduationCap } from "lucide-react";

const interests = [
  { icon: FlaskConical, label: "Mechanistic organic chemistry" },
  { icon: BookOpen, label: "Asymmetric multi-catalytic reactions" },
  { icon: Cpu, label: "Computational modeling of complex catalytic systems" },
  { icon: Sparkles, label: "Machine learning for molecular prediction" },
];

const awards = [
  "National Teacher Award 2023 (President of India)",
  "Shanti Swarup Bhatnagar Prize (2013)",
  "CRSI Bronze Medal",
  "J. C. Bose National Fellowship",
  "Swarnajayanti Fellowship (DST)",
  "B. M. Birla Prize in Chemistry",
];

const education = [
  { degree: "Ph.D.", institution: "Indian Institute of Science (IISc), Bangalore", advisor: "Prof. J. Chandrasekhar" },
  { degree: "Postdoctoral Research", institution: "Ohio State University, USA", advisor: "Prof. Christopher Hadad" },
];

const About = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading title="About the Group" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Sunoj Research Group (The RBS Group) at the Department of Chemistry, IIT Bombay focuses on understanding chemical reactivity through computational modeling and mechanistic exploration. Located on the 3rd floor, Room No. 418-A, our group has been at the forefront of computational organic chemistry research in India.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Our work lies at the intersection of:</p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8 list-none pl-0">
            {[
              "Asymmetric multi-catalytic reactions",
              "Transition metal catalysis (C–H activation)",
              "Cooperative & relay catalysis",
              "Machine learning for asymmetric catalysis",
              "Organocatalysis mechanisms",
              "Noncovalent interactions in catalysis",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 text-foreground text-sm font-medium">
                <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We aim to uncover fundamental mechanistic principles that drive selectivity, efficiency, and innovation in chemical transformations. Our group has published over 190 research articles in leading international journals.
          </p>
        </motion.div>
      </div>
    </section>

    {/* PI Section */}
    <section className="py-24 bg-secondary">
      <div className="container max-w-4xl">
        <SectionHeading title="Principal Investigator" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl font-heading font-bold mb-1">Prof. Raghavan B. Sunoj</h3>
          <p className="text-accent font-medium mb-2">Professor, Department of Chemistry, IIT Bombay</p>
          <p className="text-muted-foreground text-sm mb-6">
            Raghavan received his early education in Kerala (India) before earning his Ph.D. from Indian Institute of Science (IISc) Bangalore, working with Professor J. Chandrasekhar. After postdoctoral research with Professor Christopher Hadad at the Ohio State University, Columbus (USA), he returned to India and joined IIT Bombay where he continues to lead cutting-edge research in computational chemistry.
          </p>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Education</h4>
          <div className="flex flex-col gap-3 mb-8">
            {education.map((e) => (
              <div key={e.degree} className="flex items-start gap-3">
                <GraduationCap size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-foreground text-sm">{e.degree}</span>
                  <span className="text-muted-foreground text-sm"> — {e.institution}</span>
                  <p className="text-xs text-muted-foreground">Advisor: {e.advisor}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Research Interests</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {interests.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={20} />
                </div>
                <span className="text-foreground text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Selected Awards & Honors</h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {awards.map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm">
                <Award size={14} className="text-gold shrink-0" />
                <span className="text-foreground">{a}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default About;
