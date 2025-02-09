import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../common";

const CV = () => {
  const [pdfWidth, setPdfWidth] = React.useState(900);
  const [viewportHeight, setViewportHeight] = React.useState(0);

  React.useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth - 32, 900);
      setPdfWidth(width);
      setViewportHeight(window.innerHeight - 80);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section
      id="work-experience"
      className="container mx-auto px-4 flex flex-col min-h-screen"
    >
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-2xl md:text-3xl font-bold text-center py-4"
      >
        CV
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 flex items-center justify-center w-full"
      >
        <motion.div variants={fadeIn} className="w-full flex justify-center">
          <embed
            src="/CV.pdf"
            type="application/pdf"
            style={{
              width: pdfWidth,
              height: viewportHeight,
              maxHeight: "85vh",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CV;
