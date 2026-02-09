import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    year: 2024,
    papers: [
      { title: "Chemo-, regio- and enantioselective hydroformylation of trisubstituted cyclopropenes: access to chiral quaternary cyclopropanes", journal: "Nature Communications", doi: "10.1038/s41467-024-50689-z", authors: "Li S, Zhang D, Purushothaman A, Lv H, Shilpa S, Sunoj RB, Li X, Zhang X" },
    ],
  },
  {
    year: 2023,
    papers: [
      { title: "Role of Noncovalent Interactions in Inducing High Enantioselectivity in an Alcohol Desymmetrization Reaction", journal: "J. Am. Chem. Soc.", doi: "10.1021/jacs.3c06131", authors: "Ghosh S, Changotra A, Petrone DA, Isomura M, Carreira EM, Sunoj RB" },
    ],
  },
  {
    year: 2020,
    papers: [
      { title: "A unified machine-learning protocol for asymmetric catalysis as a proof of concept demonstration using asymmetric hydrogenation", journal: "Proc. Natl. Acad. Sci. USA", doi: "10.1073/pnas.1916392117", authors: "Ahneman DT, Estrada JG, Lin S, Dreher SD, Doyle AG" },
    ],
  },
  {
    year: 2018,
    papers: [
      { title: "Two chiral catalysts in action: insights into cooperativity and stereoselectivity in proline and cinchona-thiourea dual organocatalysis", journal: "Chemical Science", doi: "10.1039/C8SC03078B", authors: "Bhaskararao B, Sunoj RB" },
    ],
  },
  {
    year: 2016,
    papers: [
      { title: "Directing group assisted meta-hydroxylation by C–H activation", journal: "Chemical Science", doi: "10.1039/C5SC04060C", authors: "Maji A, Bhaskararao B, Singha S, Sunoj RB, Maiti D" },
      { title: "What Is the Intrinsic Reactivity of a Diazo Compound in Catalytic Insertion into C–H Bonds?", journal: "J. Am. Chem. Soc.", doi: "10.1021/jacs.6b05834", authors: "Changotra A, Sunoj RB" },
    ],
  },
  {
    year: 2015,
    papers: [
      { title: "Origin of Stereodivergence in Cooperative Asymmetric Catalysis with Simultaneous Involvement of Two Chiral Catalysts", journal: "J. Am. Chem. Soc.", doi: "10.1021/jacs.5b05902", authors: "Bhaskararao B, Sunoj RB" },
    ],
  },
  {
    year: 2012,
    papers: [
      { title: "Transition-State Models for Understanding the Origin of Chiral Induction in Asymmetric Catalysis", journal: "Acc. Chem. Res.", doi: "10.1021/ar2002906", authors: "Sunoj RB" },
    ],
  },
  {
    year: 2010,
    papers: [
      { title: "Organoselenium chemistry: role of intramolecular interactions", journal: "Chemical Reviews", doi: "10.1021/cr900352j", authors: "Mukherjee AJ, Zade SS, Singh HB, Sunoj RB" },
    ],
  },
];

const allYears = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

const Publications = () => {
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const filtered = filterYear ? publications.filter((p) => p.year === filterYear) : publications;
  const sorted = [...filtered].sort((a, b) => b.year - a.year);

  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading
            title="Publications"
            subtitle="Selected list from a total of 190+ publications. Our research appears in JACS, Nature Communications, Angewandte Chemie, Chemical Science, PNAS, ACS Catalysis, Chemical Reviews, and more."
          />

          <div className="flex flex-wrap gap-2 mb-12">
            <button onClick={() => setFilterYear(null)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterYear === null ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-muted"}`}>
              All
            </button>
            {allYears.map((y) => (
              <button key={y} onClick={() => setFilterYear(y)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterYear === y ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-muted"}`}>
                {y}
              </button>
            ))}
          </div>

          {sorted.map((group) => (
            <div key={group.year} className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-6 text-accent">{group.year}</h3>
              <div className="flex flex-col gap-4">
                {group.papers.map((paper) => (
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
            <a href="https://scholar.google.com/citations?user=hboZd1AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              View Full List on Google Scholar <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
