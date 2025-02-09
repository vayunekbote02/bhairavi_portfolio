import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../common";

const Home = () => (
  <section id="home" className="container mx-auto px-4 py-16 relative">
    {/* Banner Image */}
    <div
      className="absolute inset-x-0 top-0 h-64 bg-cover bg-center z-0"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=600')",
        opacity: 0.6, // Adjust opacity for better visibility
      }}
    ></div>

    {/* Content */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative z-10"
    >
      {/* Profile Photo and Header */}
      <div className="flex flex-col md:flex-row items-start sm:space-y-8 space-y-4 md:space-y-0 md:space-x-8 mt-32">
        {/* Profile Photo */}
        <motion.div
          variants={fadeIn}
          className="flex-shrink-0 relative -mt-20 max-sm:mx-auto sm:-mt-2"
          style={{ top: "50%" }}
        >
          <img
            src="https://drive.google.com/thumbnail?id=14NSpq4jJaTykuWvaxlTtaJzYE4Gj_HcT&sz=w200-h200"
            alt="Bhairavi Ekbote"
            className="border-4 border-white shadow-lg sm:h-60 h-54 max-sm:w-52 rounded-full sm:rounded-none"
          />
        </motion.div>

        {/* Profile Details */}
        <motion.div variants={fadeIn} className="flex-grow">
          <h1 className="text-4xl font-bold mb-2 sm:mt-20">Bhairavi Ekbote</h1>
          <p className="text-gray-700 flex flex-col">
            <span>Master&apos;s Student Sustainable Technology</span>
            <span>KTH Royal Institute of Technology</span>
          </p>
          <p className="text-gray-700 mt-1">
            Stockholm, Stockholm County, Sweden
          </p>
          <p className="flex flex-col sm:flex-row sm:gap-4 mt-2">
            <span>Email: bhairavi.ekbote@gmail.com</span>
            <span>Contact No: (+46)73490-4543</span>
          </p>
        </motion.div>
      </div>

      {/* About Me Section */}
      <motion.div variants={fadeIn} className="mt-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Graduate student in Sustainable Technology with expertise in circular
          economy strategies, sustainable innovations, and resourceefficient
          solutions for industries, including ESG frameworks and sustainable
          finance. Expertise in conducting Life Cycle Assessments (LCA),
          Material Flow Analysis (MFA), and sustainability reporting frameworks
          such as CSRD and EPD. Strong background in chemical technology and
          resource management, with a focus on optimizing processes for
          sustainable supply chains and circular business models. Experienced in
          collaborating with stakeholders, developing KPIs, and implementing
          data-driven strategies to address complex sustainability challenges.
          Adept at leading multidisciplinary projects, driving change, and
          delivering impactful solutions aligned with corporate sustainability
          goals.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div variants={fadeIn} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <p className="text-gray-700">
          Project Management, Circular Economy Strategies, Life Cycle Assessment
          (LCA), Material and Energy Flow Analysis (MFA), ESG frameworks and
          Environmental Assessment, Sustainable Supply Chain Management, Policy
          and Legislation Analysis (EU Directives), Research and Development
          (R&D), Stakeholder Engagement, Communication (Written & Verbal), Data
          Analysis and Modelling, MultiCriteria Decision Analysis,
          Sustainability Reporting, Team Leadership, Problem-Solving.
        </p>
      </motion.div>

      {/* Personal Life Section */}
      <motion.div variants={fadeIn} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Personal Life</h2>
        <p className="text-gray-700">
          I enjoy walking/hiking, reading, spending time with friends and
          family. I also like to debate and write. Always open for discussing
          about latest news in science, technology, fashion, cinema and
          literature.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Home;
