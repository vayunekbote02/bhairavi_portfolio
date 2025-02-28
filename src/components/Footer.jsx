import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-16">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/bhairavi-ekbote/"
            className="text-gray-700 hover:text-blue-500"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-gray-700">
          &copy; 2025 Bhairavi Ekbote. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
