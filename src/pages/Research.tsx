import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Atom, Leaf, BrainCircuit, FlaskConical, Server, Code, ExternalLink, ChevronRight } from "lucide-react";
import { ResearchSpecificsSkeleton, CollaboratorsSkeleton, ResourcesSkeleton } from "@/components/Skeleton";
import { useResearchAreas, useCollaborators, useHardware, useSoftware } from "@/hooks/use-sanity";

const iconMap: Record<string, any> = { Atom, FlaskConical, Leaf, BrainCircuit };

const accentColors = [
  "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
  "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
  "from-violet-500/10 to-purple-500/10 border-violet-500/20",
];
const iconColors = ["text-blue-500", "text-emerald-500", "text-violet-500"];
const tagColors = [
  "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "bg-violet-500/10 text-violet-700 dark:text-violet-300",
];

const Research = () => {
  const { data: sections, isFetching: sectionsLoading } = useResearchAreas([]);
  const { data: collaborators, isFetching: collabLoading } = useCollaborators([]);
  const { data: hardware, isFetching: hardwareLoading } = useHardware();
  const { data: software, isFetching: softwareLoading } = useSoftware();

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
                const IconComponent = iconMap[s.icon] || Atom;
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
                    <div className={`grid lg:grid-cols-5 gap-0`}>
                      {/* Icon + Title panel */}
                      <div className={`lg:col-span-2 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 ${isEven ? "lg:border-r" : "lg:border-l lg:order-last"} border-border/40`}>
                        <div>
                          <div className={`w-16 h-16 rounded-2xl bg-transparent flex items-center justify-center mb-6 shadow-sm`}>
                            <IconComponent size={32} className={iconColors[i % 3]} />
                          </div>
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

                      {/* Detail panel */}
                      <div className="lg:col-span-3 p-8 md:p-10 bg-background/50">
                        <div className="h-full flex flex-col">
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                            Research Detail
                          </p>
                          <div className="grid sm:grid-cols-2 gap-4 flex-1">
                            {(s.focusAreas || s.focus || []).map((f: string, fi: number) => (
                              <motion.div
                                key={f}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + fi * 0.06 }}
                                className="bg-card border border-border rounded-xl p-5 flex items-start gap-3"
                              >
                                <ChevronRight size={16} className={`${iconColors[i % 3]} shrink-0 mt-0.5`} />
                                <span className="text-sm text-foreground font-medium leading-snug">{f}</span>
                              </motion.div>
                            ))}
                          </div>
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

      {/* Resources — Swastik + Software */}
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

          {(hardwareLoading && (hardware as any[])?.length === 0) || (softwareLoading && (software as any[])?.length === 0) ? (
            <ResourcesSkeleton />
          ) : (
            <div className="space-y-8">
              {/* Hardware — Swastik-style showcase */}
              {(hardware as any[])?.map((hw: any, i: number) => (
                <motion.div
                  key={hw.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative overflow-hidden bg-primary rounded-2xl p-8 md:p-10 text-white"
                >
                  {/* background grid decoration */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                  <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                          <Server size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Hardware</p>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">{hw.name}</h3>
                        </div>
                      </div>
                      <p className="text-white/80 leading-relaxed text-base mb-4">{hw.description}</p>
                      {hw.link && (
                        <a
                          href={hw.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 transition-colors"
                        >
                          <ExternalLink size={14} />
                          {hw.link}
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "Cluster Type", value: "High-Performance Computing" },
                        { label: "Location", value: "IIT Bombay" },
                        { label: "Primary Use", value: "DFT & MD Simulations" },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-white/10 rounded-xl px-5 py-3">
                          <p className="text-xs text-white/50 mb-0.5">{label}</p>
                          <p className="text-sm font-semibold text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* SWASTIK featured card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className="grid lg:grid-cols-3">
                  <div className="lg:col-span-2 p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                        <Code size={24} className="text-violet-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">In-house Software</p>
                        <h3 className="text-2xl font-bold tracking-tighter">SWASTIK</h3>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground mb-3 italic">
                      Software With A STatistical Inductive Kernel
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      SWASTIK was developed at IIT Bombay as a multilingual statistical machine translation system for Indian languages. The core research, lexical resources, and system developments are accessible via the IIT Bombay Natural Language Processing (CFILT) research group.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.cfilt.iitb.ac.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium hover:bg-violet-500/20 transition-colors"
                      >
                        <ExternalLink size={14} />
                        CFILT Research Group
                      </a>
                      <a
                        href="https://www.cfilt.iitb.ac.in/resources/tools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-muted/70 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Language Tools
                      </a>
                      <a
                        href="https://www.cse.iitb.ac.in/~pb/papers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-muted/70 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Publications
                      </a>
                    </div>
                  </div>
                  <div className="bg-muted/30 p-8 flex flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-border">
                    {[
                      { label: "Type", value: "Statistical MT System" },
                      { label: "Language Coverage", value: "Indian Languages" },
                      { label: "Developed at", value: "IIT Bombay" },
                      { label: "Group", value: "CFILT / NLP" },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-card rounded-xl px-4 py-3 border border-border">
                        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                        <p className="text-sm font-semibold text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

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
