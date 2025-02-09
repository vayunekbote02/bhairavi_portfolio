import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../common";

const Project = () => (
  <section id="work-experience" className="container mx-auto px-4 py-16">
    <motion.h2
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="text-3xl font-bold text-center mb-8"
    >
      Projects
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">Life Cycle Assessment</h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Performed a comparative LCA of green and grey hydrogen production
            using SimaPro, applying the ReCiPe Midpoint (H) method for impact
            assessment.
          </li>
          <li className="text-gray-700">
            Focused on characterization, normalization, and interpretation of
            results to identify environmental hotspots and assess trade-offs in
            emissions, energy use, and resource consumption.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Stockholm Royal Seaport (SRS) Water System Analysis
          </h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Investigated the water system for Stockholm Royal Seaport (SRS) to
            assess stormwater management, water footprint, and carbon load from
            water processing.
          </li>
          <li className="text-gray-700">
            Proposed improvements such as stormwater collection for greywater
            use and greywater cascading, which can reduce the overall carbon and
            water footprint in urban areas.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Material and Energy Flow Analysis
          </h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Conducted a comprehensive material and energy balance with a focus
            on water for Holmen pulp and paper mill, focusing on Cleaner
            Production measures and improving resource efficiency and
            sustainability in industrial processes.
          </li>
          <li className="text-gray-700">
            Focused on proposing Cleaner Production alternatives like Zero
            Liquid Discharge to improve resource efficiency and sustainability
            in industrial processes.
          </li>
          <li className="text-gray-700">
            The project helped refine my ability to optimize resource flows,
            which is crucial for enhancing water efficiency in industrial
            operations.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Sustainable City Vision for Stockholm (2050)
          </h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Developed a comprehensive vision and strategic pathway for Stockholm
            to achieve sustainability by 2050, focusing on a zero-emission zone
            in the city center.
          </li>
          <li className="text-gray-700">
            Coordinated with multiple stakeholders, including municipal
            authorities and environmental organizations, to align the project
            with city-wide climate goals.
          </li>
          <li className="text-gray-700">
            Applied the modular Participatory Backcasting (mPB) framework,
            successfully engaging with key stakeholders .
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Wind Energy and Planetary Boundaries
          </h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Investigated the impact of onshore and offshore wind farms on local
            ecosystems and climate, integrating the concept of planetary
            boundaries.
          </li>
          <li className="text-gray-700">
            Analyzed how wind energy projects can be designed to minimize
            ecological disruption while maximizing climate benefits.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            Environmental Systems Analysis Tools
          </h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Critically evaluated various environmental systems analysis tools,
            including a comparative study of battery electric vehicles versus
            internal combustion engines, focusing on reducing carbon emissions
            and sustainability.
          </li>
          <li className="text-gray-700">
            Developed skills in selecting the most appropriate tool for specific
            sustainability challenges.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            (Ecodesign Rules) E-Waste Reduction
          </h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Explored innovative solid waste management strategies, with a focus
            on the smart design of smartphones to reduce e-waste and minimize
            climate impact.
          </li>
          <li className="text-gray-700">
            Analyzed practical solutions for smartphones based on ESPR golden
            rules to enhance waste treatment and support sustainable urban
            development.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">Digital Product Passport</h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Analyzed the impact of the upcoming EU legislation on Digital
            Product passport for Ekoligens, and developed strategies for
            transparency and customer satisfaction, focusing on traceability and
            sustainability.
          </li>
          <li className="text-gray-700">
            This project enhanced my expertise in regulatory compliance and
            sustainable innovation, essential for industries focusing on
            transparency and product lifecycle management.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="text-xl font-semibold">
            CSRD and Corporate Sustainability Management
          </h3>
        </div>
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mt-2">
            Analyzed Fazer&apos;s sustainability reporting strategy using the
            CSRD, ESPR, and GRI standards.
          </li>
          <li className="text-gray-700">
            Assessed the impact of its social sustainability in relation to
            nutrition, and evaluated how these frameworks guide the
            company&apos;s long-term sustainability goals.
          </li>
          <li className="text-gray-700">
            Evaluated sustainability strategy against UN SDGs, Paris Agreement,
            and frameworks like TCFD.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  </section>
);

export default Project;
