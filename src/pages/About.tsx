import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen, FlaskConical, Cpu, Sparkles, Award, GraduationCap, ChevronRight } from "lucide-react";
import { useAboutPage } from "@/hooks/use-sanity";

const iconMap: Record<string, any> = {
  FlaskConical, BookOpen, Cpu, Sparkles,
};

const fallbackData = {
  groupDescription: "The CCML Group (Computational Chemistry & Machine Learning) at the Department of Chemistry, IIT Bombay focuses on understanding chemical reactivity through computational modeling and mechanistic exploration. Located on the 3rd floor, Room No. 418-A, our group has been at the forefront of computational organic chemistry research in India.",
  researchAreas: [
    "Asymmetric multi-catalytic reactions",
    "Transition metal catalysis (C–H activation, cross-coupling)",
    "Cooperative & relay catalytic strategies",
    "Machine learning for asymmetric catalysis",
    "Organocatalysis mechanisms",
    "Noncovalent interactions in stereoselectivity",
  ],
  publicationSummary: "We aim to uncover fundamental mechanistic principles that drive selectivity, efficiency, and innovation in chemical transformations. Our group has published over 190 research articles in leading international journals including JACS, Nature Communications, Angewandte Chemie, Chemical Science, PNAS, ACS Catalysis, and Chemical Reviews.",
  piName: "Prof. Raghavan B. Sunoj",
  piTitle: "Professor, Department of Chemistry, IIT Bombay",
  piBio: 'Raghavan received his early education in Kerala (India) before earning his Ph.D. from Indian Institute of Science (IISc) Bangalore, working with Professor J. Chandrasekhar. After a couple of years of postdoctoral research in the laboratory of Professor Christopher M. Hadad at the Ohio State University, Columbus (USA), he returned to India and joined IIT Bombay. He is often known among students as the "Night Professor" for his dedication to late-night research sessions. He was honoured by the President of India with the National Teacher Award 2023 for Higher Education.',
  education: [
    { degree: "Ph.D.", institution: "Indian Institute of Science (IISc), Bangalore", advisor: "Prof. J. Chandrasekhar" },
    { degree: "Postdoctoral Research", institution: "Ohio State University, Columbus, USA", advisor: "Prof. Christopher M. Hadad" },
  ],
  interests: [
    { icon: "FlaskConical", label: "Asymmetric multi-catalytic reactions" },
    { icon: "BookOpen", label: "Transition metal catalysis & C–H activation" },
    { icon: "Cpu", label: "Machine learning for asymmetric catalysis" },
    { icon: "Sparkles", label: "Noncovalent interactions in catalysis" },
  ],
  awards: [
    "National Teacher Award 2023 (President of India)",
    "Shanti Swarup Bhatnagar Prize in Chemical Sciences (2013)",
    "J. C. Bose National Fellowship",
    "Swarnajayanti Fellowship (DST)",
    "CRSI Bronze Medal",
    "B. M. Birla Prize in Chemistry",
    "Friedrich Wilhelm Bessel Research Award (Alexander von Humboldt Foundation)",
    "INSA Medal for Young Scientists",
  ],
  coursesTaught: [
    "CY 101 — Chemistry (General, for B.Tech.)",
    "CY 224 — Organic Chemistry II",
    "CY 336 — Quantum Chemistry",
    "CY 612 — Stereochemistry",
    "CY 703 — Computational Chemistry",
    "CY 813 — Reaction Mechanisms in Organic Chemistry",
  ],
};

const About = () => {
  const { data } = useAboutPage(fallbackData);

  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group · IIT Bombay"
        title="About the Group"
        description="The CCML Group focuses on understanding chemical reactivity through computational modeling, mechanistic exploration, and machine learning-driven molecular discovery."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="About the Group" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{data.groupDescription}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Our work lies at the intersection of:</p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8 list-none pl-0">
              {data.researchAreas.map((item: string) => (
                <li key={item} className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 text-foreground text-sm font-medium">
                  <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">{data.publicationSummary}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title="Principal Investigator" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-heading font-bold mb-1">{data.piName}</h3>
            <p className="text-accent font-medium mb-2">{data.piTitle}</p>
            <p className="text-muted-foreground text-sm mb-6">{data.piBio}</p>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Education</h4>
            <div className="flex flex-col gap-3 mb-8">
              {data.education.map((e: any) => (
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
              {data.interests.map((item: any) => {
                const Icon = iconMap[item.icon] || Sparkles;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Selected Awards & Honors</h4>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {data.awards.map((a: string) => (
                <div key={a} className="flex items-center gap-2 text-sm">
                  <Award size={14} className="text-gold shrink-0" />
                  <span className="text-foreground">{a}</span>
                </div>
              ))}
            </div>
            <Link to="/professor" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-accent font-semibold rounded-full shadow-lg hover:bg-white/90 transition-colors text-lg group tracking-tighter">
              See More Details
              <div className="bg-accent rounded-full text-white p-2 transition-transform group-hover:translate-x-1">
                <ChevronRight size={25} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="Courses Taught" />
          <div className="grid sm:grid-cols-2 gap-3">
            {data.coursesTaught.map((c: string, i: number) => (
              <motion.div key={c} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-lg p-4 border border-border">
                <p className="text-sm font-medium text-foreground">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
