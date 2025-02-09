import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../common";

const Achievements = () => (
  <section id="work-experience" className="container mx-auto px-4 py-16">
    <motion.h2
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="text-3xl font-bold text-center mb-8"
    >
      Achievements
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">Patent</h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            An Energy Efficient Cryogenic Based Grinder for Low Bulk High Value
            Commodities, Patent no - 472710.
          </li>
          <li className="text-gray-700">
            Invented a low bulk high value commodity grinder that preserved
            aromatics of the spices, worked on gravity and nitrogen cooling and
            enabled low resource and water wastage.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">Recognition</h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Recognized as Innovative Genius by Ministry of Human Resource
            Development, India.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  </section>
);

export default Achievements;
