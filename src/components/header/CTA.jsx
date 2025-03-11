import React from "react";
import { motion } from "framer-motion";
import CV from "../../assets/abhay-resume.pdf";

const CTA = () => {
  return (
    <motion.div
      className="mt-6 flex justify-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     
      <motion.a
        href={CV}
        download
        className="px-6 py-3 rounded-lg text-lg font-semibold bg-blue-500 text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        whileHover={{ scale: 1.1 }}
      >
        Download CV
      </motion.a>

      {/* Let's Talk Button */}
      <motion.a
        href="#contact"
        className="px-6 py-3 rounded-lg text-lg font-semibold bg-transparent border-2 border-blue-400 text-blue-400 shadow-lg transition-all duration-300 hover:bg-blue-400 hover:text-white hover:scale-105"
        whileHover={{ scale: 1.1 }}
      >
        Let's Talk
      </motion.a>
    </motion.div>
  );
};

export default CTA;
