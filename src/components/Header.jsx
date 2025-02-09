import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md p-4 fixed w-full top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Bhairavi Ekbote</div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/work-experience" className="hover:text-blue-500">
            Work Experience
          </Link>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link to="/achievements" className="hover:text-blue-500">
            Achievements
          </Link>
          <Link to="/education" className="hover:text-blue-500">
            Education
          </Link>
          <Link to="/references" className="hover:text-blue-500">
            References
          </Link>
          <Link to="/cv" className="hover:text-blue-500">
            CV
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-500" onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/work-experience"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Work Experience
            </Link>
            <Link
              to="/projects"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/achievements"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Achievements
            </Link>
            <Link
              to="/education"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Education
            </Link>
            <Link
              to="/references"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              References
            </Link>
            <Link to="/cv" className="hover:text-blue-500" onClick={closeMenu}>
              CV
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
