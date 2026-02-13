import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useState } from "react";

const FooterLink = ({ to, children }: { to: string; children: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={to} className="text-white/90 hover:text-white transition-colors">
        {children}
      </Link>
      <div className={`h-[1px] bg-accent mt-1 transition-transform duration-300 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
    </div>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white">
    <div className="container py-6 md:py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-screen-lg mx-auto">
        <div>
          <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Navigation</h4>
          <div className="flex flex-col gap-1 text-sm md:text-base">
            <FooterLink to="/about">About us</FooterLink>
            <FooterLink to="/research">Research</FooterLink>
            <FooterLink to="/publications">Publications</FooterLink>
            <FooterLink to="/team">Team</FooterLink>
            <FooterLink to="/contact">Contact us</FooterLink>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Research Areas</h4>
          <div className="flex flex-col gap-1 text-sm md:text-base">
            <FooterLink to="/research#catalysis">Asymmetric Catalysis</FooterLink>
            <FooterLink to="/research#metal">Transition Metal</FooterLink>
            <FooterLink to="/research#ml">Machine Learning</FooterLink>
            <FooterLink to="/research#computational">Computational Chemistry</FooterLink>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Contact</h4>
          <div className="flex flex-col gap-1">
            <div className="text-white/90">
              <div className="font-semibold text-white mb-1 text-sm md:text-base">IIT Bombay:</div>
              <p className="text-xs md:text-sm">Room 418-A, 3rd Floor, Dept. of Chemistry, IIT Bombay, Powai, Mumbai 400076</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Socials</h4>
          <div className="flex items-center gap-2 md:gap-1">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="mailto:sunoj@chem.iitb.ac.in" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-4 mt-8 md:mt-0">
        <Link to="/" className="inline-block">
          <div className="text-4xl sm:text-6xl md:text-8xl lg:text-[250px] font-semibold text-white/90 hover:text-white transition-colors -tracking-widest" >RBS Group</div>
          {/* <div className="text-sm sm:text-base md:text-xl text-white/70 tracking-tighter">Computational Chemistry and Machine Learning Group</div> */}
        </Link>
      </div>

      <div className="border-t border-white/10 pt-4 md:pt-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-1 text-xs md:text-sm text-white/70">
          <div>© {new Date().getFullYear()} CCML Group, IIT Bombay. All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
