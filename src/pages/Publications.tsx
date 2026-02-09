import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    year: 2026,
    papers: [
      { title: "Unveiling the Origin of Stereoselectivity in NHC-Catalyzed Reactions", journal: "JACS", doi: "10.1021/jacs.2026.xxxxx" },
      { title: "Machine Learning Guided Catalyst Optimization for C–H Activation", journal: "Nature Chemistry", doi: "10.1038/s41557-026-xxxxx" },
    ],
  },
  {
    year: 2025,
    papers: [
      { title: "Mechanistic Insights into Pd-Catalyzed Cross Coupling Reactions", journal: "Angewandte Chemie", doi: "10.1002/anie.202500000" },
      { title: "Computational Design of Chiral Phosphoric Acid Catalysts", journal: "ACS Catalysis", doi: "10.1021/acscatal.5b00000" },
      { title: "Hybrid Quantum-ML Approach to Reaction Barrier Prediction", journal: "Chemical Science", doi: "10.1039/D5SC00000A" },
    ],
  },
  {
    year: 2024,
    papers: [
      { title: "Role of Weak Interactions in Asymmetric Organocatalysis", journal: "JACS", doi: "10.1021/jacs.2024.xxxxx" },
      { title: "Data-Driven Selectivity Models for Transition Metal Catalysis", journal: "ACS Catalysis", doi: "10.1021/acscatal.4b00000" },
    ],
  },
];

const allYears = publications.map((p) => p.year);

const Publications = () => {
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const filtered = filterYear
    ? publications.filter((p) => p.year === filterYear)
    : publications;

  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading
            title="Publications"
            subtitle="Our research is published in leading journals including JACS, Angewandte Chemie, Chemical Science, and ACS Catalysis."
          />

          {/* Year Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setFilterYear(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterYear === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              All
            </button>
            {allYears.map((y) => (
              <button
                key={y}
                onClick={() => setFilterYear(y)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterYear === y
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Papers */}
          {filtered.map((group) => (
            <div key={group.year} className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-6 text-accent">{group.year}</h3>
              <div className="flex flex-col gap-4">
                {group.papers.map((paper, i) => (
                  <motion.div
                    key={paper.doi}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-xl p-6 border border-border card-hover"
                  >
                    <h4 className="font-heading font-semibold text-foreground mb-2">{paper.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{paper.journal}</p>
                    <div className="flex gap-4">
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent font-medium hover:underline"
                      >
                        <ExternalLink size={14} /> DOI
                      </a>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <FileText size={14} /> PDF
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              View Full List on Google Scholar <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
