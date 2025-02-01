import { motion } from "framer-motion";
import { fadeIn } from "../common";

const WorkExperience = () => (
  <section id="work-experience" className="container mx-auto px-4 py-16">
    <motion.h2
      variants={fadeIn}
      className="text-3xl font-bold text-center mb-8"
    >
      Work Experience
    </motion.h2>

    <motion.div variants={fadeIn} className="space-y-8">
      {/* Private Science Teacher */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">Private Science Teacher</h3>
          <p className="text-gray-600">July 2022 - Feb 2023</p>
        </div>
        <ul className="list-disc pl-5">
          {" "}
          {/* Add list-disc and padding-left */}
          <li className="text-gray-700 mt-2">
            Teaching high school students&apos; science. Enhanced student
            learning by optimizing a wide range of instructional approaches.
          </li>
          <li className="text-gray-700">
            Evaluated course content and syllabus to facilitate student-centered
            learning.
          </li>
        </ul>
      </div>

      {/* Electrochemical Treatment of Effluent */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Electrochemical Treatment of Effluent (colored effluent)
          </h3>
          <p className="text-gray-600">July 2021 - May 2022</p>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Institute of Chemical Technology, Mumbai under Dr. Sandeep More.
          </li>
          <li className="text-gray-700">
            Conducted research on innovative materials and methods for
            electrochemical treatment of effluent produced by the chemical
            industry to degrade pollutants and preserve ecosystems.
          </li>
        </ul>
      </div>

      {/* White Biotechnology in Textile Processing */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            White Biotechnology in Textile Processing
          </h3>
          <p className="text-gray-600">May 2021 - Aug 2021</p>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Rossari Biotech Ltd, Mumbai under Dr. Amey Damle and Dr. Ashok
            Athalaye.
          </li>
          <li className="text-gray-700">
            Applied white biotechnology in textile processing, contributing to
            sustainable consumption and production. Developed processes that
            optimized resource usage, saving water, time, and energy.
          </li>
        </ul>
      </div>

      {/* Measurement and Relevance of Different Effluent Parameters */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Measurement and Relevance of Different Effluent Parameters in the
            Chemical Industry
          </h3>
          <p className="text-gray-600">May 2021 - Aug 2021</p>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Institute of Chemical Technology, Mumbai under Dr. Sandeep P. More.
          </li>
          <li className="text-gray-700">
            Characterized and optimized measurement of effluent in the chemical
            processing industry, enabling recommendations for effective
            pre-treatment and further treatment processes.
          </li>
        </ul>
      </div>

      {/* Key Challenges in Sustainability in the Indian Process Industry */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Key Challenges in Sustainability in the Indian Process Industry
          </h3>
          <p className="text-gray-600">Dec 2020 - Dec 2021</p>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Development of a Framework for Co-management of Safety and
            Sustainability in the Indian Context.
          </li>
          <li className="text-gray-700">
            Indian Institute of Technology, Bombay under Dr. Sandip Roy.
          </li>
          <li className="text-gray-700">
            Identified key challenges and developed a framework for
            co-management of safety and sustainability in the chemical sector.
          </li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default WorkExperience;
