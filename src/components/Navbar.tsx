import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "People", path: "/people" },
  { label: "Publications", path: "/publications" },
  { label: "News", path: "/news" },
  { label: "Open Positions", path: "/positions" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
           <span className="text-lg font-semibold text-primary-foreground" style={{ letterSpacing: '-0.05em' }}>
             CCML<span className="font-light ml-1">@ IITB</span>
           </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === l.path
                  ? "text-accent bg-navy-light/40"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-navy-light/20"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-navy-light/30 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === l.path
                      ? "text-accent bg-navy-light/40"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-navy-light/20"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
