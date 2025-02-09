import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../common";

const WorkExperience = () => (
  <section id="work-experience" className="container mx-auto px-4 py-16">
    <motion.h2
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="text-3xl font-bold text-center mb-8"
    >
      Work Experience
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Work Experience 1 */}
      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">Private Science Teacher</h3>
          <p className="text-gray-600">July 2022 - Feb 2023</p>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Teaching high school students&apos; science. Enhanced student
            learning by optimizing a wide range of instructional approaches.
          </li>
          <li className="text-gray-700">
            Evaluated course content and syllabus to facilitate student-centered
            learning.
          </li>
        </ul>
      </motion.div>

      {/* Work Experience 2 */}
      <motion.div variants={fadeIn}>
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
      </motion.div>

      {/* Work Experience 3 */}
      <motion.div variants={fadeIn}>
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
      </motion.div>

      {/* Work Experience 4 */}
      <motion.div variants={fadeIn}>
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
      </motion.div>

      {/* Work Experience 5 */}
      <motion.div variants={fadeIn}>
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
      </motion.div>
    </motion.div>
  </section>
);

export default WorkExperience;
