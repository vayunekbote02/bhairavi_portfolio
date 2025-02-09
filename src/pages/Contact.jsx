import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../common";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const templateParams = {
        to_email: "myname@gmail.com",
        from_name: e.target.name.value,
        from_email: e.target.email.value,
        message: e.target.message.value,
      };

      await emailjs.send(
        "service_nm4pegx", // Add your EmailJS service ID
        "template_05v2181", // Add your EmailJS template ID
        templateParams,
        "mYMP4agkO1AwtC1qA" // Add your EmailJS public key
      );

      setStatus("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold text-center mb-8"
      >
        Contact
      </motion.h2>
      <motion.form
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p
              className={`text-sm ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
