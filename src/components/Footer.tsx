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
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-12 mb-8">
        <div>
          <h4 className="text-white font-semibold mb-2">Navigation</h4>
          <div className="flex flex-col gap-1">
            <FooterLink to="/about">About us</FooterLink>
            <FooterLink to="/research">Research</FooterLink>
            <FooterLink to="/publications">Publications</FooterLink>
            <FooterLink to="/team">Team</FooterLink>
            <FooterLink to="/contact">Contact us</FooterLink>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Research Areas</h4>
          <div className="flex flex-col gap-1">
            <FooterLink to="/research#catalysis">Asymmetric Catalysis</FooterLink>
            <FooterLink to="/research#metal">Transition Metal</FooterLink>
            <FooterLink to="/research#ml">Machine Learning</FooterLink>
            <FooterLink to="/research#computational">Computational Chemistry</FooterLink>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <div className="flex flex-col gap-1">
            <div className="text-white/90">
              <div className="font-semibold text-white mb-1">IIT Bombay:</div>
              <p className="text-sm">Room 418-A, 3rd Floor, Dept. of Chemistry, IIT Bombay, Powai, Mumbai 400076</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Socials</h4>
          <div className="flex items-center gap-1">
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
      
      <div className="text-center mb-12">
        <Link to="/" className="inline-block">
          <div className="text-6xl md:text-[250px] font-semibold text-white/90 hover:text-white transition-colors" style={{ letterSpacing: '-0.1em' }}>CCML Group</div>
          <div className="text-xl text-white/70" style={{ letterSpacing: '-0.05em' }}>Computational Chemistry and Machine Learning Group</div>
        </Link>
      </div>

      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1 text-sm text-white/70">
          <div>© {new Date().getFullYear()} CCML Group, IIT Bombay. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-px h-4 bg-white/20" />
            <Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
