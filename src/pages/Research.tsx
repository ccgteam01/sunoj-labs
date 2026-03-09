import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Atom, Leaf, BrainCircuit, FlaskConical, Server, Code } from "lucide-react";
import { ResearchSpecificsSkeleton, CollaboratorsSkeleton, ResourcesSkeleton, GeneralResearchSkeleton } from "@/components/Skeleton";
import { useResearchAreas, useCollaborators, useHardware, useSoftware, useGeneralResearch } from "@/hooks/use-sanity";

const iconMap: Record<string, any> = { Atom, FlaskConical, Leaf, BrainCircuit };

const Research = () => {
  const { data: sections, isFetching: sectionsLoading } = useResearchAreas([]);
  const { data: collaborators, isFetching: collabLoading } = useCollaborators([]);
  const { data: hardware, isFetching: hardwareLoading } = useHardware();
  const { data: software, isFetching: softwareLoading } = useSoftware();
  const { data: generalResearch, isFetching: generalLoading } = useGeneralResearch();

  return (
    <PageLayout>
      <PageHero 
        title="Research Areas" 
        description="Our research spans computational mechanistic chemistry, transition metal and organocatalysis, and machine learning-driven molecular discovery." 
      />

      <section id="specifics" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background scroll-mt-12 md:scroll-mt-4">
        <div className="container max-w-5xl px-4 sm:px-6">
          {sectionsLoading && sections.length === 0 ? (
            <ResearchSpecificsSkeleton />
          ) : (
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
              {sections.map((s: any, i: number) => {
                const IconComponent = iconMap[s.icon] || Atom;
                return (
                  <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 border border-border card-hover">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                        <IconComponent size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">{s.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{s.description || s.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {(s.focusAreas || s.focus || []).map((f: string) => (
                            <span key={f} className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-full">{f}</span>
                          ))}
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

      <section id="general" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background scroll-mt-12 md:scroll-mt-4">
        <div className="container max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            General Research
          </h2>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8">Overview of our research activities</p>
          
          {generalLoading && !generalResearch ? (
            <GeneralResearchSkeleton />
          ) : (
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <img src={generalResearch?.imageUrl} alt="General Research" className="w-full rounded-lg" />
            </div>
          )}
        </div>
      </section>

      <section id="collaborative" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background scroll-mt-12 md:scroll-mt-4">
        <div className="container max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            Collaborative Research
          </h2>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8">We actively collaborate with leading experimental and computational groups worldwide.</p>
          {collabLoading && collaborators.length === 0 ? (
            <CollaboratorsSkeleton />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {collaborators.map((c: any, i: number) => (
                <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl p-4 sm:p-5 md:p-6 border border-border card-hover">
                  <h4 className="font-heading font-bold text-foreground mb-1">{c.name}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{c.institution || c.inst}</p>
                  <p className="text-xs text-muted-foreground">{c.topic}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="resources" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background scroll-mt-12 md:scroll-mt-4">
        <div className="container max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            Resources
          </h2>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8">Computational infrastructure and software tools</p>
          {(hardwareLoading && hardware?.length === 0) || (softwareLoading && software?.length === 0) ? (
            <ResourcesSkeleton />
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {hardware?.map((hw: any) => (
                <div key={hw.name} className="bg-card rounded-xl p-5 sm:p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="text-primary" size={28} />
                    <h3 className="text-2xl font-semibold">Hardware</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {hw.description} {hw.link && (
                      <a href={hw.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {hw.link}
                      </a>
                    )}
                  </p>
                </div>
              ))}

              <div className="bg-card rounded-xl p-5 sm:p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">Software</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {software?.map((sw: any) => (
                    <li key={sw.name}>• {sw.name} {sw.version && `(${sw.version})`}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
