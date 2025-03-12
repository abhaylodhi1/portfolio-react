import { motion } from "framer-motion";
import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import img from "../../assets/Me.png";

const Intro = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-16 bg-gray-900 text-white text-center">
      <div ref={ref} className="w-4/5 mx-auto">
        {/* Heading */}
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={slideInLeft}>
          <h5 className="text-lg text-gray-400">Get to Know</h5>
          <h2 className="text-3xl font-bold text-blue-400 mb-6">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-blue-400 shadow-lg">
              <img src={img} alt="Your Image" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="text-left"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <div className="grid grid-cols-2 gap-6 mb-6">
              <motion.article
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <FaAward className="text-blue-400 text-3xl mb-2" />
                <h5 className="text-lg font-semibold">Experience</h5>
                <small className="text-gray-400">6 Months</small>
              </motion.article>
              <motion.article
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <VscFolderLibrary className="text-blue-400 text-3xl mb-2" />
                <h5 className="text-lg font-semibold">Projects</h5>
                <small className="text-gray-400">7+ Completed Projects</small>
              </motion.article>
            </div>

            <p className="text-gray-300 mb-6">
            6 months experienced React.js Developer with hands-on experience in developing and optimizing web applications using React.js, Zustand, Axios, and DevExpress DataGrid. Skilled in building highly responsive UI components, implementing state management, and integrating APIs for seamless data handling. Proficient in translating designs into high-quality code and ensuring data integrity with Zod and Yup. Experienced in SQL development, database optimization, and performance tuning. Adept at monitoring frontend performance, debugging, and enhancing user experience through efficient UI/UX design.
            </p>

            <motion.a
              href="#contact"
              className="inline-block bg-blue-400 text-gray-900 px-6 py-3 rounded-md font-semibold transition-all hover:bg-blue-500"
              whileHover={{ scale: 1.1 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
