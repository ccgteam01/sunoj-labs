import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Server, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { ResearchSpecificsSkeleton, CollaboratorsSkeleton, ResourcesSkeleton } from "@/components/Skeleton";
import { useResearchAreas, useCollaborators, useComputePlatforms, useSoftware, usePublications } from "@/hooks/use-sanity";
import { sizedImage } from "@/lib/sanity";

const FALLBACK_IMG = "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif";

// ponytail: keyword match - no theme link on publications yet. Assign themes in Studio for exact mapping.
const AREA_KEYWORDS: Record<string, string[]> = {
  "Machine Learning in Catalysis": ["machine learning", "deep learning", "neural", "reinforcement", "generative", "transfer learning", "reactaivate", "deepmech", "predict"],
  "Asymmetric Multi-Catalytic Reactions": ["asymmetric", "cooperative", "dual", "organocatal", "enantios", "stereodiverg", "n-heterocyclic", "chiral"],
  "Mechanistic Studies on C-H Bond Activation": ["c-h", "c–h", "c(sp", "activation", "borylation", "functionaliz", "allylation", "fluorination"],
};
const relevantPapers = (title: string, papers: any[], focus: string[] = []) => {
  const keys = (AREA_KEYWORDS[title] || []).concat(focus.map((f) => f.toLowerCase()));
  if (!keys.length) return [];
  return papers
    .filter((p) => keys.some((k) => (p.title || "").toLowerCase().includes(k)))
    .sort((a, b) => (b.year || 0) - (a.year || 0))
    .slice(0, 6);
};

const accentColors = [
  "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
  "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
  "from-violet-500/10 to-purple-500/10 border-violet-500/20",
];
const tagColors = [
  "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "bg-violet-500/10 text-violet-700 dark:text-violet-300",
];

const paperImg = (p: any) =>
  p.imageUrl ? (sizedImage(p.imageUrl, 600) as string) : (p.graphicalAbstractUrl || FALLBACK_IMG);

// One relevant paper at a time, horizontal card, with prev/next.
const PER_PAGE = 3;
// One row of vertical paper cards, paged with prev/next.
const RelevantPapersCarousel = ({ rel }: { rel: any[] }) => {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(rel.length / PER_PAGE);
  const go = (d: number) => setPage((n) => (n + d + pages) % pages);
  const shown = rel.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  return (
    <div className="flex items-stretch gap-2 flex-1">
      {pages > 1 && (
        <button onClick={() => go(-1)} aria-label="Previous papers" className="shrink-0 self-center w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronLeft size={18} />
        </button>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1"
        >
          {shown.map((p: any) => (
            <a
              key={p._id || p.title}
              href={p.doi ? `https://doi.org/${p.doi}` : p.pdfUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl border border-border overflow-hidden card-hover flex flex-col"
            >
              <img
                src={paperImg(p)}
                alt={p.title}
                loading="lazy"
                className="w-full h-28 object-cover bg-background"
                onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
              />
              <div className="p-3 flex flex-col flex-1">
                <span className="text-[11px] font-medium text-accent mb-1">{p.year}</span>
                <h4 className="text-xs font-semibold text-foreground leading-snug line-clamp-4">{p.title}</h4>
                <p className="text-[11px] text-muted-foreground mt-auto pt-2">{p.journal}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </AnimatePresence>
      {pages > 1 && (
        <button onClick={() => go(1)} aria-label="Next papers" className="shrink-0 self-center w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};

const Research = () => {
  const { data: sections, isFetching: sectionsLoading } = useResearchAreas([]);
  const { data: collaborators, isFetching: collabLoading } = useCollaborators([]);
  const { data: platforms, isFetching: platformsLoading } = useComputePlatforms([]);
  const { data: software, isFetching: softwareLoading } = useSoftware();
  const papers = (usePublications([]).data ?? []) as any[];

  return (
    <PageLayout>
      <PageHero
        title="Research Areas"
        description="Our research spans computational mechanistic chemistry, transition metal and organocatalysis, and machine learning-driven molecular discovery."
      />

      {/* Specific Research Areas */}
      <section id="specifics" className="py-16 md:py-24 bg-transparent scroll-mt-12">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tighter mb-3">
              Specific Research
            </h2>
            <div className="section-divider" />
          </motion.div>

          {sectionsLoading && sections.length === 0 ? (
            <ResearchSpecificsSkeleton />
          ) : (
            <div className="flex flex-col gap-10">
              {sections.map((s: any, i: number) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className={`bg-gradient-to-br ${accentColors[i % 3]} border rounded-2xl overflow-hidden`}
                  >
                    <div className={`grid lg:grid-cols-3 gap-0`}>
                      {/* Text panel (1/3) */}
                      <div className={`lg:col-span-1 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 ${isEven ? "lg:border-r" : "lg:border-l lg:order-last"} border-border/40`}>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-foreground">
                            {s.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {s.description || s.desc}
                          </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-border/30">
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            Focus Areas
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(s.focusAreas || s.focus || []).map((f: string) => (
                              <span
                                key={f}
                                className={`px-3 py-1.5 text-xs font-medium rounded-full ${tagColors[i % 3]}`}
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Detail panel - relevant publications */}
                      <div className="lg:col-span-2 p-8 md:p-10 bg-background/50">
                        <div className="h-full flex flex-col">
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                            Relevant Papers
                          </p>
                          {(() => {
                            const rel = relevantPapers(s.title, papers, s.focusAreas || s.focus);
                            if (!rel.length) return <p className="text-sm text-muted-foreground">Publications coming soon.</p>;
                            return <RelevantPapersCarousel rel={rel} />;
                          })()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Collaborative Research */}
      <section id="collaborative" className="py-16 md:py-24 bg-muted/30 scroll-mt-12">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tighter mb-3">
              Collaborative Research
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4">
              We actively collaborate with leading experimental and computational groups worldwide.
            </p>
          </motion.div>
          {collabLoading && collaborators.length === 0 ? (
            <CollaboratorsSkeleton />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {collaborators.map((c: any, i: number) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card rounded-xl p-5 md:p-6 border border-border card-hover"
                >
                  <h4 className="font-bold text-foreground mb-1">{c.name}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{c.institution || c.inst}</p>
                  <p className="text-xs text-muted-foreground">{c.topic}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Resources - Swastik + Software */}
      <section id="resources" className="py-16 md:py-24 bg-transparent scroll-mt-12">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tighter mb-3">
              Computational Resources
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4">
              High-performance computing infrastructure and software tools powering our research.
            </p>
          </motion.div>

          {(platformsLoading && (platforms as any[])?.length === 0) || (softwareLoading && (software as any[])?.length === 0) ? (
            <ResourcesSkeleton />
          ) : (
            <div className="space-y-8">
              {/* Compute platforms - 3 vertical cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {(platforms as any[])?.map((pf: any, i: number) => (
                  <motion.div
                    key={pf._id || pf.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative overflow-hidden bg-primary rounded-2xl p-6 md:p-7 text-white flex flex-col"
                  >
                    {/* background grid decoration */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                          <Server size={22} className="text-white" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Platform</p>
                          <h3 className="text-xl font-bold tracking-tighter leading-tight">{pf.name}</h3>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {(pf.specs || []).map((sp: any, si: number) => (
                          <div key={si} className="bg-white/10 rounded-lg px-4 py-2.5">
                            <p className="text-[11px] text-white/50 mb-0.5">{sp.label}</p>
                            <p className="text-sm font-semibold text-white">{sp.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Software */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Code size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tools</p>
                    <h3 className="text-2xl font-bold tracking-tighter">Software Stack</h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {(software as any[])?.map((sw: any) => (
                    <div
                      key={sw.name}
                      className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3 border border-border"
                    >
                      <span className="text-sm font-semibold text-foreground">{sw.name}</span>
                      {sw.version && (
                        <span className="text-xs text-muted-foreground ml-2 font-mono bg-transparent rounded px-1.5 py-0.5">
                          {sw.version}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
