import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const newsData = [
  {
    year: 2024,
    items: [
      "Paper on enantioselective hydroformylation of cyclopropenes published in Nature Communications",
      "Collaborative work with ETH Zurich on noncovalent interactions in catalysis",
    ],
  },
  {
    year: 2023,
    items: [
      "Prof. Sunoj honoured with the National Teacher Award 2023 by the Hon'ble President of India at Vigyan Bhawan, New Delhi",
      "Paper on stereoselectivity in alcohol desymmetrization published in JACS",
      "New PhD scholars joined the RBS Group",
    ],
  },
  {
    year: 2020,
    items: [
      "Unified ML protocol for asymmetric catalysis published in PNAS",
      "Machine learning approach for catalyst design receives wide attention",
    ],
  },
  {
    year: 2018,
    items: [
      "Work on cooperative dual organocatalysis published in Chemical Science",
      "Invited talk at Gordon Research Conference",
    ],
  },
  {
    year: 2015,
    items: [
      "Stereodivergent cooperative asymmetric catalysis published in JACS",
    ],
  },
  {
    year: 2013,
    items: [
      "Prof. Sunoj awarded the Shanti Swarup Bhatnagar Prize in Chemical Sciences",
    ],
  },
];

const News = () => (
  <PageLayout>
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <SectionHeading title="News & Updates" />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="flex flex-col gap-12">
            {newsData.map((group) => (
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

export default News;
