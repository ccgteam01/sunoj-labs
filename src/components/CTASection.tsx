import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface CTASectionProps {
  backgroundImage: string;
  title: ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({ backgroundImage, title, description, buttonText, buttonLink }: CTASectionProps) => {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] w-[90%] mx-auto overflow-hidden mb-12 sm:mb-16 md:mb-24 rounded-xl md:rounded-2xl">
      <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 container py-16 sm:py-20 md:py-24 lg:py-32 flex items-center justify-center min-h-[400px] md:min-h-[500px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-5 md:mb-6 tracking-tighter">
            {title}
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium leading-none mb-6 sm:mb-7 md:mb-8 tracking-tighter px-2 sm:px-0">
            {description}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white text-accent font-semibold rounded-full shadow-lg hover:bg-white/90 transition-colors text-base sm:text-lg group tracking-tighter"
          >
            {buttonText}
            <div className="bg-accent rounded-full text-white p-1.5 sm:p-2 transition-transform group-hover:translate-x-1">
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
