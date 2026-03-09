import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo_blue.png";

const navLinks = [
  { label: "Home", path: "/" },
  { 
    label: "Research", 
    path: "/research",
    dropdown: [
      { label: "Specifics", path: "/research#specifics" },
      { label: "General", path: "/research#general" },
      { label: "Collaborative", path: "/research#collaborative" },
      { label: "Resources", path: "/research#resources" },
    ]
  },
  { 
    label: "Group", 
    path: "/group",
    dropdown: [
      { label: "Prof RBS", path: "/prof-rbs" },
      { label: "Co-Workers", path: "/co-workers" },
      { label: "Alumni", path: "/alumni" },
    ]
  },
  { label: "Publications", path: "/publications" },
  { 
    label: "Academic", 
    path: "/academic",
    dropdown: [
      { label: "Courses", path: "/courses" },
      { label: "Lectures", path: "/lectures" },
      { label: "Seminars", path: "/seminars" },
    ]
  },
  { label: "News", path: "/news" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-lg">
      <div className="flex items-center justify-between h-14 px-6">
        
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="RBS Group(CCML) @ IITB" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const isOpen = l.label === "Research" ? researchOpen : l.label === "Group" ? groupOpen : l.label === "Academic" ? academicOpen : false;
            const setIsOpen = l.label === "Research" ? setResearchOpen : l.label === "Group" ? setGroupOpen : l.label === "Academic" ? setAcademicOpen : () => {};
            const isActive = l.label === "Research" ? location.pathname.startsWith('/research') : l.label === "Group" ? (location.pathname.startsWith('/prof-rbs') || location.pathname.startsWith('/co-workers') || location.pathname.startsWith('/alumni')) : l.label === "Academic" ? location.pathname.startsWith('/academic') : location.pathname === l.path;
            
            return l.dropdown ? (
              <div key={l.path} className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <button className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                  isActive
                    ? "text-primary-foreground bg-primary"
                    : "text-primary/70 hover:text-primary hover:bg-primary/10"
                }`}>
                  {l.label}
                  <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full mt-1 bg-background border border-border rounded-lg shadow-lg py-1 min-w-[160px]">
                      {l.dropdown.map((item) => (
                        <Link key={item.path} to={item.path} className="block px-4 py-2 text-sm text-primary/70 hover:text-primary hover:bg-primary/10">
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === l.path
                    ? "text-primary-foreground bg-primary"
                    : "text-primary/70 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary p-2"
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
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((l) => {
                const isOpen = l.label === "Research" ? researchOpen : l.label === "Group" ? groupOpen : l.label === "Academic" ? academicOpen : false;
                const setIsOpen = l.label === "Research" ? setResearchOpen : l.label === "Group" ? setGroupOpen : l.label === "Academic" ? setAcademicOpen : () => {};
                
                return l.dropdown ? (
                  <div key={l.path}>
                    <button onClick={() => setIsOpen(!isOpen)} className="w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors text-primary/70 hover:text-primary hover:bg-primary/10 flex items-center justify-between">
                      {l.label}
                      <ChevronDown size={16} className={isOpen ? "rotate-180" : ""} />
                    </button>
                    {isOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {l.dropdown.map((item) => (
                          <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-primary/60 hover:text-primary">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === l.path
                        ? "text-primary-foreground bg-primary"
                        : "text-primary/70 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
