import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Mail } from "lucide-react";

const coWorkers = [
  {
    name: "Manajit Das",
    bsc: "B.Sc. A.B.N. Seal College, North Bengal University",
    msc: "M.Sc. IIT Hyderabad",
    research: "--",
    email: "",
    image: ""
  },
  {
    name: "Priyanka Kanojia",
    bsc: "B.Sc. Mumbai University",
    msc: "M.Sc. Mumbai University",
    research: "--",
    email: "",
    image: ""
  },
  {
    name: "Shilpa",
    bsc: "B.Sc. Kannur University",
    msc: "M.Sc. Cochin University of Science and Technology",
    research: "Mechanistic studies on asymmetric catalysis using computational and machine learning tools",
    email: "",
    image: ""
  },
  {
    name: "Gargee Kashyap",
    bsc: "B.Sc. Gauhati University",
    msc: "M.Sc. Banaras Hindu University",
    research: "Exploration of catalytic reactions machine learning and computational approaches",
    email: "",
    image: ""
  },
  {
    name: "Nupur Jain",
    bsc: "B.Sc. Punjab Chandigarh University",
    msc: "M.Sc. Punjab Chandigarh University",
    research: "Computational studies on catalytic reactions and use of machine learning in reaction discovery",
    email: "",
    image: ""
  },
  {
    name: "Ankit Ghosh",
    bsc: "B.Sc. Ramakrishna Mission Vidyamandira, Belur",
    msc: "M.Sc. Indian Institute of Technology Bombay",
    research: "Exploring molecular world with artificial intelligence and computational chemistry tools",
    email: "",
    image: ""
  },
  {
    name: "Hariharan Swaminathan",
    bsc: "B.Sc. Fergusson College, Pune.",
    msc: "M.Sc. University of Pune.",
    research: "Machine learning in organic chemistry",
    email: "",
    image: ""
  },
  {
    name: "Swastik",
    bsc: "B.Sc. Hindu College, University of Delhi",
    msc: "M.Sc. Indian Institute of Technology Bombay",
    research: "Computational studies on mechanism of C-H activation reactions",
    email: "",
    image: ""
  },
  {
    name: "Prashant Singh",
    bsc: "B.Sc. Deshbandhu College , University of Delhi",
    msc: "M.Sc. Sri Venkateswara College , University of Delhi",
    research: "Mechanistic studies on asymmetric catalysis using machine learning tools",
    email: "",
    image: ""
  },
  {
    name: "Upasana Deka",
    bsc: "B.Sc. Gauhati University",
    msc: "M.Sc. Indian Institute of Technology, Dhanbad",
    research: "Exploration of asymmetric cataltic reactions using machine leaning tools",
    email: "",
    image: ""
  }
];

const undergrads = [
  {
    name: "Amritesh Pandey",
    degree: "BS Chemistry - Indian Institute of Technology Bombay",
    research: "",
    email: "",
    image: ""
  },
  {
    name: "Muskaan Jain",
    degree: "B.Tec. Computer Science and Engineering - Indian Institute of Technology Bombay",
    research: "",
    email: "",
    image: ""
  },
  {
    name: "Ujwal Shankar",
    degree: "B.Tec. Computer Science and Engineering - Indian Institute of Technology Bombay",
    research: "",
    email: "",
    image: ""
  },
  {
    name: "Chirodeep",
    degree: "M.Sc. Chemistry, Institute of Technology Bombay",
    research: "",
    email: "",
    image: ""
  }
];

const CoWorkers = () => {
  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group"
        title="Co-Workers"
        description="Meet our talented researchers working on computational chemistry and machine learning."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />
      <section className="py-24 bg-background">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Graduate <span className="font-serif italic">Researchers</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coWorkers.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl p-6 border border-border card-hover"
                >
                  {person.image && (
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                  )}
                  <h4 className="font-heading font-bold text-lg text-foreground mb-3">{person.name}</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">{person.bsc}</p>
                    <p className="text-muted-foreground">{person.msc}</p>
                    {person.research && person.research !== "--" && (
                      <p className="text-accent font-medium mt-3">
                        <span className="text-foreground">Research Interest:</span> {person.research}
                      </p>
                    )}
                    {person.email && (
                      <div className="flex items-center gap-2 mt-3">
                        <Mail size={16} className="text-accent" />
                        <p className="text-muted-foreground">{person.email}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Under Graduate <span className="font-serif italic">Researchers</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {undergrads.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl p-6 border border-border card-hover"
                >
                  {person.image && (
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                  )}
                  <h4 className="font-heading font-bold text-lg text-foreground mb-3">{person.name}</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">{person.degree}</p>
                    {person.research && (
                      <p className="text-accent font-medium mt-3">
                        <span className="text-foreground">Research Interest:</span> {person.research}
                      </p>
                    )}
                    {person.email && (
                      <div className="flex items-center gap-2 mt-3">
                        <Mail size={16} className="text-accent" />
                        <p className="text-muted-foreground">{person.email}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CoWorkers;
