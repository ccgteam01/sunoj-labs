import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Mail } from "lucide-react";
import { useCoworkers } from "@/hooks/use-sanity";
import { urlFor } from "@/lib/sanity";

const coWorkers = [
  {
    name: "Manajit Das",
    bsc: "B.Sc. A.B.N. Seal College, North Bengal University",
    msc: "M.Sc. IIT Hyderabad",
    research: "--",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Priyanka Kanojia",
    bsc: "B.Sc. Mumbai University",
    msc: "M.Sc. Mumbai University",
    research: "--",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Shilpa",
    bsc: "B.Sc. Kannur University",
    msc: "M.Sc. Cochin University of Science and Technology",
    research: "Mechanistic studies on asymmetric catalysis using computational and machine learning tools",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Gargee Kashyap",
    bsc: "B.Sc. Gauhati University",
    msc: "M.Sc. Banaras Hindu University",
    research: "Exploration of catalytic reactions machine learning and computational approaches",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Nupur Jain",
    bsc: "B.Sc. Punjab Chandigarh University",
    msc: "M.Sc. Punjab Chandigarh University",
    research: "Computational studies on catalytic reactions and use of machine learning in reaction discovery",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Ankit Ghosh",
    bsc: "B.Sc. Ramakrishna Mission Vidyamandira, Belur",
    msc: "M.Sc. Indian Institute of Technology Bombay",
    research: "Exploring molecular world with artificial intelligence and computational chemistry tools",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Hariharan Swaminathan",
    bsc: "B.Sc. Fergusson College, Pune.",
    msc: "M.Sc. University of Pune.",
    research: "Machine learning in organic chemistry",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Swastik",
    bsc: "B.Sc. Hindu College, University of Delhi",
    msc: "M.Sc. Indian Institute of Technology Bombay",
    research: "Computational studies on mechanism of C-H activation reactions",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Prashant Singh",
    bsc: "B.Sc. Deshbandhu College , University of Delhi",
    msc: "M.Sc. Sri Venkateswara College , University of Delhi",
    research: "Mechanistic studies on asymmetric catalysis using machine learning tools",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Upasana Deka",
    bsc: "B.Sc. Gauhati University",
    msc: "M.Sc. Indian Institute of Technology, Dhanbad",
    research: "Exploration of asymmetric cataltic reactions using machine leaning tools",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  }
];

const undergrads = [
  {
    name: "Amritesh Pandey",
    degree: "BS Chemistry - Indian Institute of Technology Bombay",
    research: "",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Muskaan Jain",
    degree: "B.Tec. Computer Science and Engineering - Indian Institute of Technology Bombay",
    research: "",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Ujwal Shankar",
    degree: "B.Tec. Computer Science and Engineering - Indian Institute of Technology Bombay",
    research: "",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  },
  {
    name: "Chirodeep",
    degree: "M.Sc. Chemistry, Institute of Technology Bombay",
    research: "",
    email: "",
    image: "https://i.pinimg.com/736x/b9/3b/b3/b93bb32c57ff0c6bba7f0d9e7f502b2d.jpg"
  }
];

const FlipCard = ({ person, delay, isUndergrad = false }: { person: any; delay: number; isUndergrad?: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border cursor-pointer">
          {person.imageUrl ? (
            <img src={person.imageUrl} alt={person.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h4 className="font-heading font-bold text-xl text-white">{person.name}</h4>
          </div>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-card border border-border p-6 overflow-y-auto cursor-pointer">
          <h4 className="font-heading font-bold text-lg text-foreground mb-4">{person.name}</h4>
          <div className="space-y-3 text-sm">
            {isUndergrad ? (
              <p className="text-muted-foreground">{person.degree}</p>
            ) : (
              <>
                <p className="text-muted-foreground">{person.bsc}</p>
                <p className="text-muted-foreground">{person.msc}</p>
              </>
            )}
            {person.research && person.research !== "--" && (
              <p className="text-accent font-medium mt-3">
                <span className="text-foreground">Research:</span> {person.research}
              </p>
            )}
            {person.email && (
              <div className="flex items-center gap-2 mt-3">
                <Mail size={16} className="text-accent" />
                <p className="text-muted-foreground">{person.email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoWorkers = () => {
  const { data: coworkers } = useCoworkers([]);
  const graduates = coworkers.filter((p: any) => p.type === 'graduate');
  const undergrads = coworkers.filter((p: any) => p.type === 'undergraduate');
  return (
    <PageLayout>
      <PageHero title="Co-Workers" />

      <section className="py-12 bg-background">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Graduate Researchers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {graduates.map((person: any, i: number) => (
                <FlipCard key={person.name} person={person} delay={i * 0.05} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter">
              Under Graduate Researchers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {undergrads.map((person: any, i: number) => (
                <FlipCard key={person.name} person={person} delay={i * 0.05} isUndergrad />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CoWorkers;
