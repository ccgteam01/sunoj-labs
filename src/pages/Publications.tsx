import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ExternalLink, ChevronRight, FileText, Search } from "lucide-react";
import { PublicationsSkeleton } from "@/components/Skeleton";
import { usePublications, useThemes, useHomepage } from "@/hooks/use-sanity";
import { sizedImage } from "@/lib/sanity";

// Maps a theme's `color` value (set in Sanity) to its badge classes.
const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  green: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
};
const themeClass = (color?: string) => colorClasses[color ?? ""] || "bg-accent/10 text-accent";

const Publications = () => {
  const { data: papers, isFetching } = usePublications([]);
  const themes = (useThemes([]).data ?? []) as any[];
  const home = useHomepage().data as any;
  const totalPubs = home?.publicationsTotal || 236;
  const scholarUrl = home?.googleScholarUrl || "https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en";
  const [filterTheme, setFilterTheme] = useState<string>("All"); // "All" or a theme _id
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = papers;

    if (filterTheme !== "All") {
      result = result.filter((p: any) => p.themes?.some((t: any) => t?._id === filterTheme));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p: any) =>
        p.title?.toLowerCase().includes(query) ||
        p.authors?.toLowerCase().includes(query) ||
        p.journal?.toLowerCase().includes(query) ||
        p.doi?.toLowerCase().includes(query) ||
        p.year?.toString().includes(query) ||
        p.themes?.some((t: any) => t?.title?.toLowerCase().includes(query))
      );
    }

    return result.sort((a: any, b: any) => b.year - a.year);
  }, [papers, filterTheme, searchQuery]);



  return (
    <PageLayout>
      <PageHero 
        title="Publications" 
        // description="Our research appears in leading journals including JACS, Nature Communications, Angewandte Chemie, Chemical Science, PNAS, ACS Catalysis, and Chemical Reviews." 
      />

      <section className="py-12 bg-transparent">
        <div className="container">
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

          {/* Theme Filter - driven by the theme documents in Sanity */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setFilterTheme("All")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterTheme === "All" ? "bg-accent text-accent-foreground" : "bg-secondary hover:opacity-80"
              }`}
            >
              All
            </button>
            {themes.map((theme: any) => (
              <button
                key={theme._id}
                onClick={() => setFilterTheme(theme._id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterTheme === theme._id
                    ? "bg-accent text-accent-foreground"
                    : `${themeClass(theme.color)} hover:opacity-80`
                }`}
              >
                {theme.title}
              </button>
            ))}
          </div>

          {/* Count + Google Scholar link */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <p className="text-sm text-muted-foreground">
              (Selected list from a total of {totalPubs} publications)
            </p>
            <a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 pl-5 pr-2 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors group tracking-tighter">
              View Full List on Google Scholar
              <div className="bg-white rounded-full text-accent p-1.5 transition-transform group-hover:translate-x-1">
                <ChevronRight size={20} />
              </div>
            </a>
          </div>

          {isFetching && papers.length === 0 ? (
            <PublicationsSkeleton />
          ) : (
            <>
              <div className="flex flex-col gap-6">
                {filtered.map((paper: any, idx: number) => {
                  const hasImage = paper.imageUrl || paper.graphicalAbstractUrl;
                  const meta = (
                    <div className={hasImage ? "md:col-span-2 p-6" : "p-6"}>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {paper.themes?.map((theme: any) => (
                          <span key={theme._id} className={`px-3 py-1 text-xs font-medium rounded-full ${themeClass(theme.color)}`}>
                            {theme.title}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">{paper.title}</h4>
                      <p className="text-sm text-foreground mb-1">{paper.authors}</p>
                      <p className="text-sm text-accent font-medium mb-4">{paper.journal}</p>
                      <div className="flex flex-wrap gap-2">
                        {paper.doi && (
                          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                            <ExternalLink size={16} /> View Publication
                          </a>
                        )}
                        {paper.pdfUrl && (
                          <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                            <FileText size={16} /> View PDF
                          </a>
                        )}
                      </div>
                    </div>
                  );
                  return (
                    <motion.div
                      key={paper.doi || paper.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-card rounded-xl border border-border card-hover overflow-hidden"
                    >
                      {hasImage ? (
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className={`md:col-span-1 p-4 ${idx % 2 === 1 ? "md:order-last" : ""}`}>
                            <img
                              src={paper.imageUrl ? (sizedImage(paper.imageUrl, 600) as string) : paper.graphicalAbstractUrl}
                              alt={paper.title}
                              loading="lazy"
                              className="w-full h-full md:h-72 object-contain rounded-lg border border-border bg-white"
                            />
                          </div>
                          {meta}
                        </div>
                      ) : (
                        meta
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
