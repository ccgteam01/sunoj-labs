import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const alumni = [
  { no: 1, name: "Dr. Mahendra P. Patil", position: "Faculty member, DAE, Mumbai", award: "Ely Lilly Asia Outstanding Thesis Award, 2009" },
  { no: 2, name: "Dr. Deepa Janardanan", position: "Faculty member, Central University, Kasargod, Kerala", award: "Ely Lilly Asia Outstanding Thesis Award, 2010" },
  { no: 3, name: "Dr. Dipankar Roy", position: "City University of New York", award: "" },
  { no: 4, name: "Dr. C. B. Shinisha", position: "", award: "Ely Lilly Asia Outstanding Thesis Award, 2011" },
  { no: 5, name: "Dr. R. Rajeev", position: "Assistant Professor, National Institute of Technology Rourkela, Odhisa", award: "Ely Lilly Asia Outstanding Thesis Award, 2012" },
  { no: 6, name: "Dr. Manju Kumari", position: "...", award: "" },
  { no: 7, name: "Dr. Hemanta K. Kisan", position: "Faculty Member, Utkal University Bhubaneswar, Odissa.", award: "Excellence in Thesis Award, IIT Bombay, 2017" },
  { no: 8, name: "Dr. Chandan Patel", position: "Ph.D. (University of Lyon, France)", award: "" },
  { no: 9, name: "Dr. Avishek Saha", position: "Ph.D. (Rice University, Houston, USA)", award: "" },
  { no: 10, name: "Dr. Gaurav Bharadwaj", position: "Ph.D. (University of Arizona, USA)", award: "" },
  { no: 11, name: "Dr. Rabindra Nath Manna", position: "Ph.D. (Technical University of Lodz, Poland)", award: "" },
  { no: 12, name: "Mr. Subodh C. Tiwari", position: "pursuing Ph.D. at University of Southern California, USA", award: "" },
  { no: 13, name: "Dr. Kaushik Nanda", position: "Ph.D. (University of California, Riverside, USA", award: "IIT Bombay Silver Medal" },
  { no: 14, name: "Dr. Pragya Verma", position: "Ph.D. University of Minnesotta, USA", award: "" },
  { no: 15, name: "Ms. Oindrilla Bhattacharya", position: "", award: "" },
  { no: 16, name: "Mr. Gadadhar Barman", position: "", award: "" },
  { no: 17, name: "Mr. Anandgopal Sarkar", position: "", award: "" },
  { no: 18, name: "Dr. Vivek Kumar", position: "Faculty Member, State University of New York, USA", award: "" },
  { no: 19, name: "Ms. Saloni Sahni", position: "MBA, Harvard Business School, Massachusetts, USA", award: "" },
  { no: 20, name: "Mr. Sudarshan Wadkar", position: "Pursuing Ph.D.(Software Engineering), Carnegie Mellon University, Pittsburgh, USA", award: "" },
  { no: 21, name: "Dr. Megha Anand", position: "Ph.D. (University of Georgia, Athens, USA)", award: "" },
  { no: 22, name: "Dr. Arkajyoti Sengupta", position: "Ph.D. Indiana University Bloomington, USA", award: "" },
  { no: 23, name: "Mr. Ramesh Katkam", position: "", award: "" },
  { no: 24, name: "Mr. Abhishek Parija", position: "Pursuing Ph.D., Texas A&M University, USA", award: "" },
  { no: 25, name: "Dr. Rositha Kuniyil", position: "Ph. D., IICIQ - Institut Català'Investigacióíca, Tarragona, Spain.", award: "" },
  { no: 26, name: "Dr. Pritha Verma", position: "Ph.D., The Scripps Research Institute, La Jola, California, USA", award: "IIT Bombay Silver Medal" },
  { no: 27, name: "Mr. Loka Naik, P.", position: "", award: "" },
  { no: 28, name: "Dr. Akanksha Thawani", position: "Ph.D., Princeton University, New Jersey, USA", award: "IIT Bombay Silver Medal" },
  { no: 29, name: "Dr. Garima Jindal", position: "Assistant Professor, Department of Organic Chemistry, Indian Institute of Science Bangalore.", award: "Ely Lilly Asia Outstanding Thesis Award, 2015" },
  { no: 30, name: "Dr. Akhilesh K. Sharma", position: "Postdoctoral researcher, Kyoto University, Japan", award: "Ely Lilly Asia Outstanding Thesis Award, 2014" },
  { no: 31, name: "Dr. Srimukh Prasad", position: "Ph.D. University of California Berkeley", award: "IIT Bombay Silver Medal" },
  { no: 32, name: "Ms. Khushboo Gupta", position: "Research staff, Dabur health care", award: "" },
  { no: 33, name: "Mr. Prafull Prakash", position: "...", award: "" },
  { no: 34, name: "Dr. Santanu Malakar", position: "Postdoctoral Researcher at University of Pennsylvania, USA.", award: "" },
  { no: 35, name: "Mr. Sandip Das", position: "Scientist, BARC, Trombay, Mumbai", award: "" },
  { no: 36, name: "Dr. Vibin Abraham", position: "Postdoctoral Researcher at University of Michigan, Ann Arbor, USA.", award: "" },
  { no: 37, name: "Mr. Sohang Kundu", position: "Pursuing Ph.D. at University of Illionis Urbana Champign (UIUC). USA.", award: "" },
  { no: 38, name: "Ms. Heena Ugale", position: "Pharma Company, USA.", award: "" },
  { no: 39, name: "Mr. Sayan Banerjee", position: "Pursuing Ph.D. at University of Pennsylvania, Philadelphia, USA.", award: "" },
  { no: 40, name: "Ms. S. V. Shree Sowdarya", position: "Pursuing Ph.D. at Colarado State University, Fort Collins, USA.", award: "" },
  { no: 41, name: "Mr. Yogesh Todarwal", position: "Pursuing Ph.D. at Royal Institute of Technology (KTH), Stockholm, Sweden.", award: "" },
  { no: 42, name: "Dr. Yernaidu Reddi", position: "Pharma R&D, Bangalore, India.", award: "Excellence in Thesis Award, IIT Bombay, 2018" },
  { no: 43, name: "Dr. Bangaru Bhaskararao", position: "Postdoctoral Researcher at University of Pennsylvania, PA, USA.", award: "" },
  { no: 44, name: "Dr. A. Sreenithya", position: "Postdoctoral Researcher at Colorado State University, Fort Collins, USA.", award: "" },
  { no: 45, name: "Dr. Dilna Sreedhar", position: "---", award: "" },
  { no: 46, name: "Mr. Sahil Popli", position: "Pursuing Ph.D. at The Rutgers University, New Jersey, USA", award: "" },
  { no: 47, name: "Mr. Ravi Kumar", position: "---", award: "" },
  { no: 48, name: "Dr. Yuvraj Dangat", position: "Pharma R&D Organization, Bangalore", award: "" },
  { no: 49, name: "Dr. Avtar Changotra", position: "Assistant Professor, University of Jammu, India", award: "Excellence in Thesis Award, IIT Bombay, 2019" },
  { no: 50, name: "Dr. Athira C", position: "Postdoctoral Researcher, KAUST, Saudi Arabia", award: "" },
  { no: 51, name: "Dr. Monika Pareek", position: "Postdoctoral Researcher at Uppsala University, Sweden", award: "Excellence in Thesis Award, IIT Bombay, 2020" },
  { no: 52, name: "Dr. Anju Unnikrishnan", position: "----", award: "" },
  { no: 53, name: "Mr. Achyut Gogoi", position: "Purusing Ph.D. at Texas A&M, USA", award: "" },
  { no: 54, name: "Dr. Soumi Tribedi", position: "Postdoctoral Researcher at University of Michigan, Ann Arbor, USA", award: "" },
  { no: 55, name: "Dr. Sukriti Singh", position: "Postdoctoral Researcher at University of Cambridge, UK", award: "Excellence in Thesis Award, IIT Bombay, 2023" },
  { no: 56, name: "Ms. Nikita Grover", position: "----", award: "" },
  { no: 57, name: "Mr. Ravi Mourya", position: "Pusuring Ph.D. at Penn. State. USA", award: "" },
  { no: 58, name: "Dr. Surya, K.", position: "Research Associate, IIT Palakkad", award: "" },
  { no: 59, name: "Mr. Mihir Surve", position: "Pusuring Ph.D. at University of Notre Dame, Indiana. USA", award: "" },
  { no: 60, name: "Dr. Nikhil Borse", position: "Postdoctoral Researcher at University of Gottingen, Germany", award: "Excellence in Thesis Award, IIT Bombay, 2025" },
  { no: 61, name: "Dr. Supratim Ghosh", position: "Postdoctoral Researcher at The University of British Columbia, Canada", award: "Excellence in Thesis Award, IIT Bombay, 2025" },
  { no: 62, name: "Dr. Ajnabiul Hoque", position: "Postdoctoral Researcher at University of Munster, Germany", award: "--" },
  { no: 63, name: "Mr. Amrut Mondal", position: "--", award: "--" }
];

const Alumni = () => {
  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group"
        title="Alumni"
        description="Our alumni have moved on to leading roles in academia, industry, and global research institutes worldwide."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />
      <section className="py-24 bg-background">
        <div className="container max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            {/* Desktop Table */}
            <div className="overflow-x-auto hidden md:block">
              <table className="w-full">
                <thead className="bg-primary/5">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Sr. No.</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Name</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Currently Placed</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Awards</th>
                  </tr>
                </thead>
                <tbody>
                  {alumni.map((person, i) => (
                    <motion.tr
                      key={person.no}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.01 }}
                      className="border-t border-border hover:bg-primary/5 transition-colors"
                    >
                      <td className="py-4 px-6 text-muted-foreground">{person.no}</td>
                      <td className="py-4 px-6 text-foreground font-medium">{person.name}</td>
                      <td className="py-4 px-6 text-muted-foreground">{person.position}</td>
                      <td className="py-4 px-6 text-accent text-sm">{person.award}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {alumni.map((person, i) => (
                <motion.div
                  key={person.no}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="border border-border rounded-lg p-4"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-semibold text-muted-foreground bg-primary/10 px-2 py-1 rounded">#{person.no}</span>
                    <h3 className="font-semibold text-foreground flex-1">{person.name}</h3>
                  </div>
                  {person.position && (
                    <div className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-foreground">Position:</span> {person.position}
                    </div>
                  )}
                  {person.award && (
                    <div className="text-sm text-accent">
                      <span className="font-medium text-foreground">Award:</span> {person.award}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Alumni;
