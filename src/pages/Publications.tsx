import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ExternalLink, ChevronRight, FileText, Search } from "lucide-react";
import { PublicationsSkeleton } from "@/components/Skeleton";
import { usePublications } from "@/hooks/use-sanity";

const researchThemes = [
  "All",
  "Asymmetric Catalysis",
  "Machine Learning",
  "C-H Activation",
  "Organocatalysis",
  "Transition Metal Catalysis",
  "Noncovalent Interactions",
  "Computational Chemistry",
];

const themeColors: Record<string, string> = {
  "Asymmetric Catalysis": "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "Machine Learning": "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "C-H Activation": "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  "Organocatalysis": "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "Transition Metal Catalysis": "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  "Noncovalent Interactions": "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "Computational Chemistry": "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
};

const Publications = () => {
  const { data: papers, isFetching } = usePublications([]);
  const [filterTheme, setFilterTheme] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = papers;
    
    if (filterTheme !== "All") {
      result = result.filter((p: any) => p.themes?.includes(filterTheme));
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p: any) => 
        p.title?.toLowerCase().includes(query) ||
        p.authors?.toLowerCase().includes(query) ||
        p.journal?.toLowerCase().includes(query) ||
        p.doi?.toLowerCase().includes(query) ||
        p.year?.toString().includes(query) ||
        p.themes?.some((t: string) => t.toLowerCase().includes(query))
      );
    }
    
    return result.sort((a: any, b: any) => b.year - a.year);
  }, [papers, filterTheme, searchQuery]);

  const grouped = useMemo(() => {
    const groups: Record<number, any[]> = {};
    filtered.forEach((p: any) => {
      if (!groups[p.year]) groups[p.year] = [];
      groups[p.year].push(p);
    });
    return Object.entries(groups)
      .map(([year, paps]) => ({ year: Number(year), papers: paps }))
      .sort((a, b) => b.year - a.year);
  }, [filtered]);

  return (
    <PageLayout>
      <PageHero 
        title="Publications" 
        description="Our research appears in leading journals including JACS, Nature Communications, Angewandte Chemie, Chemical Science, PNAS, ACS Catalysis, and Chemical Reviews." 
      />

      <section className="py-12 bg-background">
        <div className="container max-w-5xl">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by title, authors, journal, DOI, year, or theme..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Theme Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {researchThemes.map((theme) => {
              const isActive = filterTheme === theme;
              const colorClass = theme === "All" ? "bg-secondary" : themeColors[theme];
              
              return (
                <button
                  key={theme}
                  onClick={() => setFilterTheme(theme)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : `${colorClass} hover:opacity-80`
                  }`}
                >
                  {theme}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} publication{filtered.length !== 1 ? "s" : ""}
          </p>

          {isFetching && papers.length === 0 ? (
            <PublicationsSkeleton />
          ) : (
            <>
              {grouped.map((group) => (
                <div key={group.year} className="mb-12">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-accent">{group.year}</h3>
                  <div className="flex flex-col gap-6">
                    {group.papers.map((paper: any) => (
                      <motion.div
                        key={paper.doi}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-xl border border-border card-hover overflow-hidden"
                      >
                        {paper.imageUrl ? (
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                              <img
                                src={paper.imageUrl}
                                alt={paper.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:col-span-2 p-6">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {paper.themes?.map((theme: string) => (
                                  <span key={theme} className={`px-3 py-1 text-xs font-medium rounded-full ${themeColors[theme] || "bg-accent/10 text-accent"}`}>
                                    {theme}
                                  </span>
                                ))}
                              </div>
                              <h4 className="font-heading font-semibold text-foreground mb-2">{paper.title}</h4>
                              <p className="text-sm text-muted-foreground mb-1">{paper.authors}</p>
                              <p className="text-sm text-accent font-medium mb-4">{paper.journal}</p>
                              <div className="flex flex-wrap gap-2">
                                <a
                                  href={`https://doi.org/${paper.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                                >
                                  <ExternalLink size={16} /> View Publication
                                </a>
                                {paper.pdfUrl && (
                                  <a
                                    href={paper.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                                  >
                                    <FileText size={16} /> View PDF
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {paper.themes?.map((theme: string) => (
                                <span key={theme} className={`px-3 py-1 text-xs font-medium rounded-full ${themeColors[theme] || "bg-accent/10 text-accent"}`}>
                                  {theme}
                                </span>
                              ))}
                            </div>
                            <h4 className="font-heading font-semibold text-foreground mb-2">{paper.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{paper.authors}</p>
                            <p className="text-sm text-accent font-medium mb-4">{paper.journal}</p>
                            <div className="flex flex-wrap gap-2">
                              <a
                                href={`https://doi.org/${paper.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                              >
                                <ExternalLink size={16} /> View Publication
                              </a>
                              {paper.pdfUrl && (
                                <a
                                  href={paper.pdfUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                                >
                                  <FileText size={16} /> View PDF
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center mt-8">
                <a href="https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg group tracking-tighter">
                  View Full List on Google Scholar
                  <div className="bg-white rounded-full text-accent p-2 transition-transform group-hover:translate-x-1">
                    <ChevronRight size={25} />
                  </div>
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
