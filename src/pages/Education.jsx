import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../common";

const Education = () => (
  <section id="work-experience" className="container mx-auto px-4 py-16">
    <motion.h2
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="text-3xl font-bold text-center mb-8"
    >
      Education
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">
              Master of Science in Sustainable Technology
            </span>
            <span className="font-normal text-stone-500 mb-4">
              KTH Royal Institute of Technology, Stockholm, Sweden
            </span>
          </div>
          <p className="text-gray-600 mb-4">Aug 2023 - present</p>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            The program focuses on integrating sustainable practices with
            industrial processes, combining advanced technical knowledge with
            environmental systems analysis to develop and implement sustainable
            technologies.
          </li>
          <li className="text-gray-700 mt-2">
            Worked in a diverse, international academic environment and
            collaborated on projects with cross-functional teams, enhancing my
            ability to work in multicultural settings.
          </li>
        </ul>
      </motion.div>
      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">
              Bachelor of Technology in Fibres and Textile Processing Technology
            </span>
            <span className="font-normal text-stone-500 mb-4">
              Institute of Chemical Technology, Mumbai, India
            </span>
          </div>
          <p className="text-gray-600 mb-4">Aug 2018-Aug 2022</p>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">CGPA - 9.29/10</li>
        </ul>
      </motion.div>
    </motion.div>
  </section>
);

export default Education;
