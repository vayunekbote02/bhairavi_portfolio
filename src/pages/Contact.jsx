import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../common";

const Contact = () => (
  <section id="contact" className="container mx-auto px-4 py-16">
    <motion.h2
      variants={fadeIn}
      className="text-3xl font-bold text-center mb-8"
    >
      Contact
    </motion.h2>
    <motion.form
      variants={staggerContainer}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea className="w-full p-2 border rounded" rows="4"></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </motion.form>
  </section>
);

export default Contact;
