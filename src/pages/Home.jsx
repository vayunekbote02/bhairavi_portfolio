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
          className="flex-shrink-0 relative -mt-20 max-sm:mx-auto sm:-mt-10"
          style={{ top: "50%" }}
        >
          <img
            src="public/profile_pic.jpg"
            alt="Bhairavi Ekbote"
            className="border-4 border-white shadow-lg sm:h-60 h-54 max-sm:w-52 rounded-full sm:rounded-none"
          />
        </motion.div>

        {/* Profile Details */}
        <motion.div variants={fadeIn} className="flex-grow">
          <h1 className="text-4xl font-bold mb-2 sm:mt-20">Bhairavi Ekbote</h1>
          <p className="text-gray-700 ">
            Sustainable Technology, KTH | Institute Of Chemical Technology |
            Patent - Energy Efficient Cryogenic Grinder
          </p>
          <p className="text-gray-700 mt-1">
            Stockholm, Stockholm County, Sweden
          </p>
          <p className="flex flex-col sm:flex-row sm:gap-4 mt-2">
            <span>Email: bhairaviekbote@gmail.com</span>
            <span>Contact No: +46 73 490 45 43</span>
          </p>
        </motion.div>
      </div>

      {/* About Me Section */}
      <motion.div variants={fadeIn} className="mt-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          I am a passionate developer and researcher with a focus on creating
          impactful solutions. My career is driven by innovation and a love for
          problem-solving.
        </p>
      </motion.div>

      {/* Personal Life Section */}
      <motion.div variants={fadeIn} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Personal Life</h2>
        <p className="text-gray-700">
          In my personal life, I enjoy exploring new technologies, reading, and
          spending time with my family.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Home;
