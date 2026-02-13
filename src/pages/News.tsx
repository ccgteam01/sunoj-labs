import { useMemo } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { useNews } from "@/hooks/use-sanity";

const fallbackNews = [
  { text: "Paper on enantioselective hydroformylation of trisubstituted cyclopropenes published in Nature Communications", year: 2024 },
  { text: "Collaborative work with Prof. Xumu Zhang (SUSTech) on chiral quaternary cyclopropanes", year: 2024 },
  { text: "Collaborative study with Prof. Erick Carreira (ETH Zurich) on noncovalent interactions in alcohol desymmetrization", year: 2024 },
  { text: "Prof. Sunoj honoured with the National Teacher Award 2023 by the Hon'ble President of India at Vigyan Bhawan, New Delhi", year: 2023 },
  { text: "Paper on noncovalent interactions in enantioselective desymmetrization published in J. Am. Chem. Soc.", year: 2023 },
  { text: "New PhD scholars joined the CCML Group", year: 2023 },
  { text: "Unified ML protocol for asymmetric catalysis published in Proc. Natl. Acad. Sci. USA (PNAS)", year: 2020 },
  { text: "Machine learning approach for catalyst design and enantioselectivity prediction receives wide attention", year: 2020 },
  { text: "Insights into cooperativity in proline and cinchona-thiourea dual organocatalysis published in Chemical Science", year: 2018 },
  { text: "Invited talk at Gordon Research Conference", year: 2018 },
  { text: "Collaborative work with Prof. D. Maiti on meta-C–H activation published in Chemical Science", year: 2016 },
  { text: "Intrinsic reactivity of diazo compounds in C–H insertion published in JACS", year: 2016 },
  { text: "Origin of stereodivergence in cooperative asymmetric catalysis published in J. Am. Chem. Soc.", year: 2015 },
  { text: "Prof. Sunoj awarded the Shanti Swarup Bhatnagar Prize in Chemical Sciences", year: 2013 },
  { text: "Transition-state models for chiral induction in asymmetric catalysis published in Acc. Chem. Res.", year: 2012 },
];

const News = () => {
  const { data: newsItems } = useNews(fallbackNews);

  const grouped = useMemo(() => {
    const groups: Record<number, string[]> = {};
    newsItems.forEach((item: any) => {
      if (!groups[item.year]) groups[item.year] = [];
      groups[item.year].push(item.text);
    });
    return Object.entries(groups)
      .map(([year, items]) => ({ year: Number(year), items }))
      .sort((a, b) => b.year - a.year);
  }, [newsItems]);

  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter text-center">
            <span className="font-serif italic">News</span> & <span className="font-serif italic">Updates</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="flex flex-col gap-12">
              {grouped.map((group) => (
                <div key={group.year}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                      {String(group.year).slice(-2)}
                    </div>
                    <h3 className="text-2xl font-heading font-bold">{group.year}</h3>
                  </div>
                  <div className="flex flex-col gap-3 ml-12">
                    {group.items.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-lg p-4 border border-border">
                        <p className="text-foreground text-sm">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
