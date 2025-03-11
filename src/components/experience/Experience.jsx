import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="experience" className="py-16 bg-gray-900 text-white text-center" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInLeft}
      >
        <h5 className="text-lg text-gray-400">The Skills I Have</h5>
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Skills</h2>
      </motion.div>

      <motion.div
        className="w-4/5 mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInLeft}
      >
        <h3 className="text-xl font-semibold text-blue-300 mb-4">Front-end Development</h3>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {["HTML / CSS", "JavaScript", "SASS / SCSS", "Bootstrap, Tailwind", "React, Vite JS, Next.js", "TypeScript", "Firebase", "Node.js, Express.js", "Responsive Design, BEM Methodology", "Zustand, Context API"].map((skill, index) => (
            <motion.article
              key={index}
              className="flex items-center gap-3 bg-gray-700 p-4 rounded-lg border border-transparent hover:border-blue-400 transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <BsFillPatchCheckFill className="text-blue-400 text-xl" />
              <h4 className="text-white font-medium">{skill}</h4>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
