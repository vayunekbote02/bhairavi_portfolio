import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { fadeIn } from "../common";
import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Designer",
    quote:
      "This product has completely transformed how we work. The interface is intuitive and the features are exactly what we needed.",
    image: "https://avatar.iran.liara.run/public/90",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    quote:
      "I've tried many similar solutions, but this one stands out for its reliability and exceptional performance.",
    image: "https://avatar.iran.liara.run/public/13",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Marketing Director",
    quote:
      "The analytics capabilities have given us insights we never had before. It's been a game-changer for our strategy.",
    image: "https://avatar.iran.liara.run/public/67",
  },
];

const References = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const controls = useAnimation();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage([testimonials.length - 1, newDirection]);
    } else if (newPage >= testimonials.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newPage, newDirection]);
    }
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -100) {
      paginate(1);
    } else if (swipe > 100) {
      paginate(-1);
    } else {
      controls.start("center");
    }
  };

  return (
    <section id="work-experience" className="container mx-auto px-4 py-8">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold text-center mb-6"
      >
        References
      </motion.h2>

      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <div className="relative w-full h-72 flex items-center justify-center bg-gray-50">
          {/* Left Arrow - Hidden on mobile, shown on desktop */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors cursor-pointer hidden md:block"
            aria-label="Previous testimonial"
          >
            <FaArrowCircleLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-xl h-60 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
              >
                <div className="bg-white rounded-xl shadow-lg p-4 mx-4">
                  <div className="flex items-center mb-3">
                    <img
                      src={testimonials[page].image}
                      alt={testimonials[page].name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {testimonials[page].name}
                      </h3>
                      <p className="text-gray-600">{testimonials[page].role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    &quot;{testimonials[page].quote}&quot;
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow - Hidden on mobile, shown on desktop */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors cursor-pointer hidden md:block"
            aria-label="Next testimonial"
          >
            <FaArrowCircleRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="absolute bottom-[-6.5rem] left-0 right-0 flex justify-center space-x-4 p-4 md:hidden">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <FaArrowCircleLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <FaArrowCircleRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default References;
