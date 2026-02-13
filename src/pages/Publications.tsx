import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, ChevronRight } from "lucide-react";
import { usePublications } from "@/hooks/use-sanity";

const fallbackPublications = [
  { title: "Chemo-, regio- and enantioselective hydroformylation of trisubstituted cyclopropenes: access to chiral quaternary cyclopropanes", journal: "Nature Communications", doi: "10.1038/s41467-024-50689-z", authors: "Li S, Zhang D, Purushothaman A, Lv H, Shilpa S, Sunoj RB, Li X, Zhang X", year: 2024 },
  { title: "Role of Noncovalent Interactions in Inducing High Enantioselectivity in an Alcohol Desymmetrization Reaction", journal: "J. Am. Chem. Soc.", doi: "10.1021/jacs.3c06131", authors: "Ghosh S, Changotra A, Petrone DA, Isomura M, Carreira EM, Sunoj RB", year: 2023 },
  { title: "A unified machine-learning protocol for asymmetric catalysis as a proof of concept demonstration using asymmetric hydrogenation", journal: "Proc. Natl. Acad. Sci. USA", doi: "10.1073/pnas.1916392117", authors: "Ahneman DT, Estrada JG, Lin S, Dreher SD, Doyle AG", year: 2020 },
  { title: "Two chiral catalysts in action: insights into cooperativity and stereoselectivity in proline and cinchona-thiourea dual organocatalysis", journal: "Chemical Science", doi: "10.1039/C8SC03078B", authors: "Bhaskararao B, Sunoj RB", year: 2018 },
  { title: "Directing group assisted meta-hydroxylation by C–H activation", journal: "Chemical Science", doi: "10.1039/C5SC04060C", authors: "Maji A, Bhaskararao B, Singha S, Sunoj RB, Maiti D", year: 2016 },
  { title: "What Is the Intrinsic Reactivity of a Diazo Compound in Catalytic Insertion into C–H Bonds?", journal: "J. Am. Chem. Soc.", doi: "10.1021/jacs.6b05834", authors: "Changotra A, Sunoj RB", year: 2016 },
  { title: "Origin of Stereodivergence in Cooperative Asymmetric Catalysis with Simultaneous Involvement of Two Chiral Catalysts", journal: "J. Am. Chem. Soc.", doi: "10.1021/jacs.5b05902", authors: "Bhaskararao B, Sunoj RB", year: 2015 },
  { title: "Transition-State Models for Understanding the Origin of Chiral Induction in Asymmetric Catalysis", journal: "Acc. Chem. Res.", doi: "10.1021/ar2002906", authors: "Sunoj RB", year: 2012 },
  { title: "Organoselenium chemistry: role of intramolecular interactions", journal: "Chemical Reviews", doi: "10.1021/cr900352j", authors: "Mukherjee AJ, Zade SS, Singh HB, Sunoj RB", year: 2010 },
];

const Publications = () => {
  const { data: papers } = usePublications(fallbackPublications);
  const [filterYear, setFilterYear] = useState<number | null>(null);

  const allYears = useMemo(() => [...new Set(papers.map((p: any) => p.year))].sort((a: number, b: number) => b - a), [papers]);

  const grouped = useMemo(() => {
    const filtered = filterYear ? papers.filter((p: any) => p.year === filterYear) : papers;
    const groups: Record<number, any[]> = {};
    filtered.forEach((p: any) => {
      if (!groups[p.year]) groups[p.year] = [];
      groups[p.year].push(p);
    });
    return Object.entries(groups)
      .map(([year, paps]) => ({ year: Number(year), papers: paps }))
      .sort((a, b) => b.year - a.year);
  }, [papers, filterYear]);

  return (
    <PageLayout>
      <PageHero
        tagline="190+ Publications"
        title="Publications"
        description="Our research appears in leading journals including JACS, Nature Communications, Angewandte Chemie, Chemical Science, PNAS, ACS Catalysis, and Chemical Reviews."
        ctaText="Google Scholar Profile"
        ctaLink="https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en"
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-12">
            <button onClick={() => setFilterYear(null)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterYear === null ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-muted"}`}>
              All
            </button>
            {allYears.map((y: number) => (
              <button key={y} onClick={() => setFilterYear(y)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterYear === y ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-muted"}`}>
                {y}
              </button>
            ))}
          </div>

          {grouped.map((group) => (
            <div key={group.year} className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-6 text-accent">{group.year}</h3>
              <div className="flex flex-col gap-4">
                {group.papers.map((paper: any) => (
                  <motion.div key={paper.doi} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="font-heading font-semibold text-foreground mb-2">{paper.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{paper.authors}</p>
                    <p className="text-sm text-accent font-medium mb-3">{paper.journal}</p>
                    <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent font-medium hover:underline">
                      <ExternalLink size={14} /> DOI: {paper.doi}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <a href="https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-accent font-semibold rounded-full shadow-lg hover:bg-white/90 transition-colors text-lg group tracking-tighter">
              View Full List on Google Scholar
              <div className="bg-accent rounded-full text-white p-2 transition-transform group-hover:translate-x-1">
                <ChevronRight size={25} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
