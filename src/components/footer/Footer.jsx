import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center flex flex-col items-center justify-center gap-6 h-96">
      <motion.a
        href="#home"
        className="text-2xl font-bold hover:text-blue-400 transition-all"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Abhay Lodhi
      </motion.a>
      
      <ul className="flex flex-wrap justify-center gap-10  text-sm md:text-base">
        {["Home", "About", "Skills", "Portfolio", "Testimonials", "Contact"].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-all"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
      
      <div className="flex gap-6 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/abhaylodhi/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.2 }}
        >
          <BsLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/abhaylodhi1"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
      </div>
      
      <div className="text-sm text-gray-400">
        <small>&copy; Abhay 2025. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;