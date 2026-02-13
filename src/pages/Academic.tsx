import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const Academic = () => {
  const courses = [
    "CH 103 (Chemistry)",
    "CH 221 (Organic Chemistry-I)",
    "CH 222 (Organic Chemistry-II)",
    "CH 504 (Computational Chemistry)",
    "CH 317L (Organic Lab-I)",
    "CH 419L (Separation Techniques)",
    "CH 116L (Chemistry Lab)",
    "CH 117L (Chemistry Lab)",
    "CHS 802 (Seminar II)",
    "CHS 801 (Seminar I)",
    "HS 699 (Presentation and Communication Skills)",
  ];

  const invitedLectures = [
    "7th International Symposium on C-H Activation. IIT Bombay, December 2024.",
    "Department of Chemistry, Indian Institute of Science Education and Research (IISER) – Berhampur, Odisa, Novebmer 2024.",
    "One Day National Seminar on New Vistas in Chemistry, Department of Chemistry, Mahatma Gandhi Memorial College, Udupi, October, 2024.",
    "Current Trends in Theoretical Chemistry, Bhaba Atomic Research Centre, Trombay, September 2024.",
    "Continuous Process Intensification 2024, Indian Institute of Technology Bombay, September 2024",
    "Gordon Research Conference on Computational Chemistry, University of Southern Maine, Portland, USA, July 2024.",
    "Modern Organic Chemistry Workshop, St. Dominic's College, Kanjirapally, Kottayam, Kerala, April 2024.",
    "Central University of Gujarat, Gadhinagar, Gujarat, February 2024",
    "ACS on Campus, Tata Institute of Fundamental Research, Colaba, Mumbai, February 2024.",
    "School of Chemical Sciences, Indian Institute of Technology Mandi, Himachal Pradesh, November 2023.",
    "Department of Organic Chemistry, Indian Institute of Science Bangalore, October 2023.",
    "AztraZeneca UK Limited, Macclesfield, United Kingdom, September 2023.",
    "The 10th Asia-Pacific Conference of Theoretical and Computational Chemistry, Quy Nhon, Vietnam, February 2023.",
    "International Conference on Recent Trends in Catalysis, National Institute of Technology Calicut, February 2020.",
    "\"Su\" for Sustainability: Changing Paradigms in Process Innovation, by Dr. Reddy's Laboratory, CSIR-IICT, and RSC, Hyderabad, February 2020.",
    "Institute Colloquium at Tata Institute of Fundamental Research (TIFR), Mumbai January 2020.",
    "Chemistry Symposium, Indian Institute of Science Education and Research (IISER) – Tirupati, January 2020.",
    "New Frontiers in Chemistry Conference, Birla Institute of Technology-Pilani, Goa, December 2019.",
    "DAE Computational Chemistry Symposium (DAE-CCS-2019), BARC, Mumbai, November 2019.",
    "83rd Annual Meeting of the Indian Academy of Sciences, University of Hyderabad, November 2019.",
    "Young Investigator Meeting in Chemistry, IISER Kolkata, October 2019.",
    "The 9th Asia-Pacific Conference of Theoretical and Computational Chemistry, Sydney, Australia, October 2019.",
    "Advances in Chemical Sciences and Technologies, Nationalof Technology Warangal, September 2019.",
    "Noncovalent Interactions in Catalysis, Paris, France, September 2019.",
    "Department Colloquium at Indian Institute of Science Education and Research (IISER) – Thiruvananthapuram, Kerala, March 2019.",
    "Recent Advances in Organic and Bioorganic Chemistry (RAOBC), IISER Mohali, March 2019.",
    "Symposium on Frontiers of Science – Chemical Science, Banaras Hindu University, Varanasi, March 2019.",
    "IIT Bombay Diamond Jubilee Chemistry Symposium, IIT Bombay, February 2019.",
    "International Conference on Advances in Chemical and Structural Biology, PRIS University, Chennai, February 2019.",
    "International Symposium 'Exploring New Horizons in Chemical Sciences' Deogiri College, Aurangabad, January 2019.",
    "Emerging Frontiers in Chemical Science, Farook College, Calicut, Kerala, November 2018.",
    "Department of Chemistry, IIT Kanpur, November 2018.",
    "24th IUPAC International Conference on Physical Organic Chemistry, Faro, Portugal, July 2018. (Keynote speaker)",
    "Shanghai Institute of Organic Chemistry, Shanghai, China, May 2018.",
    "School of Chemistry, Peking University, Beijing, China, May 2018.",
    "ACS Catalysis forum at the 31st Annual Congress of the Chinese Chemical Society, Hangzhou, China, May 2018.",
    "Indo-US Bilateral Workshop on Organometallic Chemistry: From Fundamentals to Applications, Lonavala, December 2017.",
    "Satellite Conference on Chemical Synthesis, IIT Bombay, December 2017.",
    "World Association of Theoretical and Computational Chemists (WATOC), 11th Triennial congress, Munich, Germany, August 2017.",
    "Javaharlal Nehru Center for Advanced Scientific Research (JNCASR), A. V. Ramarao Foundation Lecture Prize, May 2017.",
    "Department of Chemistry, Emory University, Atlanta, (USA), February 2017.",
    "Department of Chemical and Biological Engineering, Georgia Tech. Atlanta, (USA), February 2017.",
    "Department of Chemistry and Biochemistry, University of Utah, Salt Lake City, (USA), February 2017.",
    "Department of Chemistry, University of Delaware, Wilmington (USA), February 2017.",
    "Department of Chemistry, University of Pennsylvania, Philadelphia, (USA), February 2017.",
    "International Symposium on Organic Synthesis (ICOS-21), IIT Bombay, Mumbai, December 2016.",
    "Indian Association for the Cultivation of Science Kolkata, September 2016.",
    "School of Chemical Sciences, Indian Institute of Science Education and Research (IISER) Kolkata, September 2016.",
    "Chemical Frontiers-2016, Goa, August 2016.",
    "20th International Symposium on Homogeneous Catalysis (ISHC-XX), Kyoto (Japan), July 2016. (Keynote Speaker).",
    "Department of Chemistry, Tohoku University, Sendai (Japan), July 2016.",
    "Department of Chemistry, Ibaraki University, Mito (Japan), July 2016.",
    "Department of Chemistry, Rikkyo University, Tokyo (Japan), July 2016.",
    "36th Reaction Mechanisms Conference, St Louis University, Missouri (USA), June 2016.",
    "Department of Chemistry, Rutgers University, New Jersey (USA), June 2016.",
    "Department of Chemistry, Indiana University, Bloomington (USA), March 2016.",
    "Department of Chemistry, University of Chicago (USA), March 2016.",
    "Department of Chemistry and Biochemistry, Purdue University, West Lafayette, Indiana (USA), March 2016.",
    "Department of Chemistry, University of Illinois Chicago (USA), March 2016.",
    "'Challenges in Organic Chemistry' 19th International Symposium on Advances in Chemical Sciences, University of California Irvine (USA), March 2016.",
    "School of Chemistry, Indian Institute of Science Education and Research Trivandrum, February 2016.",
    "The 7th Asia-Pacific Conference of Theoretical and Computational Chemistry, Kaohsiung, Taiwan, January 2016.",
    "Department of Chemistry, Indian Institute of Technology Kharaghpur, December 2015.",
    "Dominocat-I, First Symposium on Dominocatalysis. Aachen University, Aachen, Germany, September 2015.",
    "Challenges in Computational Homogeneous Catalysis-III, Lovik Conference Center, Stockholm, Sweden, September 2015.",
    "Institute of Organic Chemistry, University of Cologne, Germany, September 2015.",
    "Department of Chemistry, Indian Institute of Technology Madras, June 2015.",
    "Department of Chemistry, Carnegie Mellon University, Pittsburgh, May 2015.",
    "Department of Chemistry and Biochemistry, The Ohio State University, Columbus, OH, May 2015.",
    "Center for Computational Quantum Chemistry, University of Georgia, Athens, GA, May 2015.",
    "Department of Chemistry, California Institute of Technology (Caltech), May 2015.",
    "Locker Hydrocarbon Research Institute, University of Southern California, May 2015.",
    "Department of Chemistry, University of California Berkeley, May 2015.",
    "Department of Chemistry and Biochemistry, University of California Los Angeles, May 2015.",
    "International Symposium on Recent Trends in Chemistry (REACH2015), North East Hill University (NEHU), Shillong (Meghayala), March 2015.",
    "Chemical Research Society of India (CRSI), 17th National Symposium in Chemistry, National Chemical Laboratory, Pune, February 2015.",
    "22nd National Symposium on Catalysis (CatSymp22), Central Salt and Marine Research Institute, Bhavnagar (Gujarat), January 2015.",
    "Department of Chemistry, Pondichery University, Tamil Nadu, January 2015.",
    "Theoretical Chemistry Symposium (TCS 2014), National Chemical Laboratory, Pune, December 2014.",
    "New Directions in Chemical Synthesis-II (Inorganic): A Felicitation to Prof. Dr. Herbert Roesky, IIT Bombay, December 2014.",
    "World Association of Theoretical and Computational Chemists (WATOC), 10th Triennial congress, Santiago, Chile, October 2014.",
    "International Conference on 'Molecular Complexity in Modern Chemistry, September 2014, Moscow, Russia.",
    "UK-India joint symposium organized by the Royal Society of Chemistry and the Chemical Research Society of India, Cardiff University, UK, June 2014.",
    "Department of Chemistry, University of Manchester, UK, June 2014.",
    "Department of Chemistry, University of Bath, UK, June 2014.",
    "Department of Chemistry, Bristol University, UK, June 2014.",
    "Department of Chemistry, Cambridge University, UK, June 2014.",
    "Department of Chemistry, University of Oxford, UK, June 2014.",
    "National Conference on Advances in Synthetic and Materials Chemistry, University of Mumbai, March 2014.",
    "DST-SERC Winter School on 'Modeling Chemical and Biological (Re)Activity', Hyderabad, January, 2014.",
    "'Frontier Lectures in Chemistry 2014' IIT Indore, January 2014.",
    "DST-SERC Sponsored Winter School on 'Modeling Chemical and Biological (Re)Activity' January, 2014.",
    "DST-SERB Winter School on Computational Chemistry, Sardar Patel University, Gujarat, December 2013.",
    "National conference on Computational and Supramolecular Chemistry, Sacred Heart College, Thevara, Cochin, December 2013.",
    "Current Trends in Theoretical Chemistry (CTTC-2013), BARC Mumbai, September 2013.",
    "Asia Pacific Conference on Theoretical and Computational Chemistry (APCTCC-6), Gyeongju, South Korea, July 2013.",
    "Symposium on Theoretical and Computational Chemistry: Frontiers and Challenges (STCC-FC), Trichy (India), June 2013.",
    "Distinguished Lecture Series jointly organized by FCBS (Foundation for Capacity Building In Science), IISER, and NIIST Trivandrum, June 2013.",
    "Computational Chemistry Workshop, IIITM-K, Trivandrum, June 2013.",
    "Gordon Research Conference in Inorganic Reaction Mechanisms, Galveston, Texas, USA, March 2013.",
    "IIT Bombay-University of Strathclyde Research Symposium, IITB, January 2013.",
    "Theoretical Chemistry Symposium (TCS 2012), IIT Guwahati, December 2012.",
    "Frontiers in Chemical Sciences (FICS2012), IIT Guwahati, December 2012.",
    "National Symposium on New Horizons in Chemistry, October 2012, IIT Bombay.",
    "Indo-German Symposium on Frontiers in Chemistry, September 2012, IIT Bombay.",
    "National Seminar on Catalysis for Sustainable Development, M S University Baroda, January 2012",
    "Pfizer Organic Chemistry Symposium, IISc Bangalore, January 2012.",
    "National workshop on Catalysis, IIT Madras, December 2011.",
    "Chemistry of Functional Materials conference, Holiday Inn, Goa. August, 2011.",
    "9th Triennial congress of the World Association of Theoretical and Computational Chemists (WATOC2011), Santiago de Compostela, Spain, July 2011.",
    "Max Planck Institute for Kolhlenforshug, Mulheim, Germany, July 2011.",
    "Department of Chemistry, Cologne University, Germany, July 2011.",
    "Department of Chemistry, Ludwig-Maxmillian University (LMU), Munich, Germany, July 2011.",
    "5th CRSI-RSC joint symposium Chemistry, Bhubaneswar, February 2011.",
    "Department of Chemistry, Indian Institute of Technology Madras, Chennai, January 2011.",
    "International Chemical Congress of Pacific Basin Societies (Pacifichem2010), Honolulu, Hawaii, USA, December 2010.",
    "Discussion Meeting on Chemical Reactions in Unusual Media, National Chemical Laboratory Pune, October 2009.",
    "Indo-German Conference on Modeling Chemical and Biological Reactivity (MCBR2), Wildbard Kreuth, Germany, October 2009.",
    "Invited chair, International Conference on Inorganic Ring Systems (IRIS-12) Goa, August 2009.",
    "Invited chair, Chemistry of Functional Materials, Goa, August 2009.",
    "Center for Computational Quantum Chemistry (CCQC), University of Georgia, Athens USA, July 2009.",
    "Invited chair, Gordon Research Conference on Physical Organic Chemistry, New Hampshire, July 2009.",
    "Department of Chemistry, The Ohio State University Columbus, Ohio (USA). June 2009.",
    "National Organic Symposium Trust (NOST) Organic Chemistry Symposium, May 2009, Goa [Invited Lecture]",
    "Theoretical Chemistry Symposium, January 2009, Indian Institute of Science Bangalore [Invited lecture]",
    "4th INSA-KOSEF (Indo-Korean) Joint Symposium in Organic Chemistry, January 2009, National Chemical Laboratory Pune. [Invited lecture]",
    "National Academy of Sciences India 78th Annual Meeting, November 2008, Punjab University, Chandigarh. [Invited lecture]",
    "'Probing the Importance of Explicit Solvents/Additives in Organic Reactions Through Transition State Modeling' World Association of Theoretical and Computational Chemists (WATOC) world congress, Sydney, Australia, September 2008. [Invited lecture]",
    "Delivered three lectures as resource person for the DST-SERC sponsored summer school in modeling and informatics in drug discovery, July 2008. [Invited lecture]",
    "Computational Investigations on Stereoselective Organic Reactions' University of Trieste, Trieste, Italy, December 2007. [Invited lecture]",
    "'Computational and Theoretical Organic Chemistry' Zurich-India Conference, Organic Chemistry Institute, University of Zurich, Switzerland, December 2007. [Invited lecture]",
    "'Inviting Experiments Through Applied Quantum Chemistry –Paradigms from Stereoselective and Mechanistic Organic Chemistry', University of Geneva, Switzerland, December 2007. [Invited lecture]",
    "'Probing Stereoselectivity in Organic Reactions Through Transition State Modeling' Indo-German conference on Modeling Chemical and Biological Reactivity, IICT Hyderabad, September 26-29th 2007. [Invited Lecture]",
    "'Probing Mechanism and Selectivity in Organic Reactions Through Computational Methods' 18th mid year meeting of the Indian Academy of Sciences Bangalore, IISc Bangalore, July 13-14, 2007 [Invited Lecture]",
    "'Understanding Stereoselective Organic Reactions through Transition State Modeling' 1st CRSI (Chemical Research Society of India) mid-year meeting, IIT Madras July 12-13, 2006 [Invited Lecture]",
    "'Understanding Stereoselective Organic Reactions through Transition State Modeling' 31st Reaction Mechanisms Conference, June 27-30, 2006, University of Maryland, College Park, Maryland, USA.",
    "Sunoj, R. B.; Hadad, C. M. 'Computational Studies on the rearrangement pathways of -Acetoxycarbenes' Reaction Mechanism conference, The Ohio State University, June 28 to July 2, 2002, Columbus, Ohio, USA.",
    "Sunoj, R. B.; Hadad, C. M. 'Computational Studies on Arene-Water clusters' Environmental Molecular Sciences Institute-Ohio State University First annual workshop, April 3-5, 2001, Columbus, Ohio, USA.",
    "Sunoj, R. B. 'Effect of Metal Ion Coordination on the Singlet Oxygen Ene Reaction' National Organic Symposium Trust (NOST) meeting, March 3-5, 2000, Jaipur, India.",
  ];

  const publicLectures = [
    "'Why Research?' lecture series through Society for Promotion of Undergraduate Research (SPUR) 2011 and 2012.",
    "'How to write scientific articles' BRNS-Young Scientists Meeting 2012.",
    "'Scientific Presentation', Teach10000 Teachers through National Knowledge Network (NKN) 2012. The lecture was telecast live to hundreds of remote centers in India.",
    "'Secrets of Real Life Learning in Scientific Presentations', Teach 1000 college teachers program 2011.",
    "'Art of Scientific Presentations', Research Scholar's Forum, IIT Bombay 2005 and 2008.",
  ];

  return (
    <PageLayout>
      <PageHero
        tagline="CCML Group · IIT Bombay"
        title="Academic"
        description="Courses taught, invited lectures, and group seminars by Prof. Raghavan B. Sunoj and the CCML Group."
        bgImage="https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif"
      />

      <section id="courses" className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="Courses Taught" />
          <div className="grid sm:grid-cols-2 gap-3">
            {courses.map((course, i) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-lg p-4 border border-border"
              >
                <p className="text-sm font-medium text-foreground">{course}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="invited" className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title="Invited Lectures" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {invitedLectures.map((lecture, idx) => (
              <div key={idx} className="bg-card rounded-lg p-3 border border-border">
                <p className="text-sm text-muted-foreground">{lecture}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading title="Public Lectures" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {publicLectures.map((lecture, idx) => (
              <div key={idx} className="bg-card rounded-lg p-4 border border-border">
                <p className="text-sm text-foreground">{lecture}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="seminars" className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title="Group Seminars" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?src=ccgiitb%40gmail.com&ctz=Asia%2FKolkata"
              className="w-full h-[600px] border-0 rounded"
              title="Group Seminars Calendar"
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Academic;
