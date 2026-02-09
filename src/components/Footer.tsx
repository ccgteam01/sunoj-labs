import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-heading font-bold mb-4">
            Sunoj Research Group
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Computational & Mechanistic Chemistry Lab
            <br />
            Department of Chemistry, IIT Bombay
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Research", path: "/research" },
              { label: "Publications", path: "/publications" },
              { label: "Open Positions", path: "/positions" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>sunoj@chem.iitb.ac.in</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>IIT Bombay, Powai, Mumbai 400076, India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Sunoj Research Group, IIT Bombay. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
