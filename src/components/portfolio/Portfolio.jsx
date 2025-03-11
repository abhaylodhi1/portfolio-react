import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

import IMG1 from "../../assets/medical-site.png";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";

const Portfolio = () => {
  const ref = useRef(null);
  const { ref: viewRef, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description: "An educational website is a huge interactive platform to present various information for people.",
      technologies: "HTML | CSS | JavaScript | React.js",
      link: "",
      github: "",
    },
    {
      id: 2,
      title: "fh-huquq.az",
      img: IMG4,
      description: "A personal website assembled for a lawyer. Firebase is the basis of the website assembled as a full stack.",
      technologies: "HTML | CSS | JavaScript | Express.js | Firebase",
      link: "",
      github: "",
    },
    {
      id: 3,
      title: "Hospital reservation form",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript.",
      technologies: "HTML | CSS | JavaScript",
      link: "",
      github: "",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description: "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "HTML | CSS | JavaScript | Next.js",
      link: "",
      github: "",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description: "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "HTML | Styled-components | TypeScript",
      link: "",
      github: "",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description: "Real-world group project which is still in progress and will provide an educational platform for future young developers.",
      technologies: "HTML | SCSS | JavaScript",
      link: "",
      github: "",
    },
  ];

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="portfolio" ref={viewRef} className="py-16 text-center bg-gray-900 text-white overflow-hidden">
      <motion.h5 className="text-lg text-gray-400" initial="hidden" animate={inView ? "visible" : "hidden"} variants={slideInLeft}>
        My Recent Work
      </motion.h5>
      <motion.h2 className="text-4xl font-bold text-blue-400" initial="hidden" animate={inView ? "visible" : "hidden"} variants={slideInLeft}>
        Portfolio
      </motion.h2>

      <div className="w-4/5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {soloProjects.map((pro, index) => (
          <motion.article
            key={pro.id}
            className="relative bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-gray-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:-translate-y-3"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            style={{ perspective: 1000 }}
          >
            <div className="overflow-hidden rounded-md">
              <motion.img
                src={pro.img}
                alt={pro.title}
                className="w-full h-48 object-cover rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-blue-400">{pro.title}</h3>
              <p className="text-gray-300 mt-2">{pro.description}</p>
              <p className="text-gray-400 text-sm mt-2">{pro.technologies}</p>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <motion.a
                href={pro.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-md font-semibold transition-all hover:bg-gray-600"
                whileHover={{ scale: 1.1 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href={pro.link}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-400 text-gray-900 px-4 py-2 rounded-md font-semibold transition-all hover:bg-blue-500"
                whileHover={{ scale: 1.1 }}
              >
                Live Demo
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;