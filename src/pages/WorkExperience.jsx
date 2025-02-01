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
    <motion.p variants={fadeIn} className="text-gray-700 text-center">
      Details about your work experience will go here.
    </motion.p>
  </section>
);

export default WorkExperience;
