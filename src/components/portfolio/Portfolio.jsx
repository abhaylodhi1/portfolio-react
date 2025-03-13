import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

import IMG1 from "../../assets/img1.jpeg";
import IMG2 from "../../assets/img2.jpeg";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.jpeg";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.jpeg";

const Portfolio = () => {
  const ref = useRef(null);
  const { ref: viewRef, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const soloProjects = [
    {
      id: 1,
      title: "Train tickit booking",
      img: IMG6,
      description: "A modern and responsive train ticket booking UI built with React.js and Tailwind CSS for a smooth and intuitive booking experience.",
      technologies: "HTML | Tailwind | JavaScript |React.js ",
      link: "https://train-tickit-booking1.netlify.app/",
      github: "https://github.com/abhaylodhi1/abhaylodhi1-Train-ticket-booking",
    },
    {
      id: 2,
      title: "Medical store",
      img: IMG3,
      description: "A responsive medical store website built with HTML, CSS, and JavaScript, featuring a modern UI with interactive product displays, a search bar, and an intuitive shopping experience.",
      technologies: "HTML | CSS | JavaScript ",
      link: "https://emedicine-site1.netlify.app/",
      github: "https://github.com/abhaylodhi1/emedicine-site",
    },
   
    {
      id: 3,
      title: "Medicine buying site",
      img: IMG5,
      description: "An online medicine-buying website built using HTML, CSS, and JavaScript, featuring a shopping cart, secure payment confirmation, and a user-friendly interface for browsing and purchasing medicines.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://medical-site-javascript1.netlify.app/",
      github: "https://github.com/abhaylodhi1/medicle_site_js",
    },
    {
      id: 4,
      title: "Tic-tac-toe",
      img: IMG2,
      description: "A simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript, where two players take turns marking X or O on a 3x3 grid to win.",
      technologies: "HTML | CSS | JavaScript ",
      link: "https://tictacto-game1.netlify.app/",
      github: "https://github.com/abhaylodhi1/Tic-tac-toe-game",
    },
    {
      id: 5,
      title: "Brick-game",
      img: IMG4,
      description: "A classic brick breaker game built with HTML, CSS, and JavaScript, where players control a paddle to bounce a ball and break bricks.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://brick-game1.netlify.app/",
      github: "https://github.com/abhaylodhi1/Brick-game",
    },
    {
      id: 6,
      title: "Dice game",
      img: IMG1,
      description: "A simple dice game built using HTML, CSS, and JavaScript, where players roll a virtual die to get random outcomes.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://dice-game-javascript1.netlify.app/",
      github: "https://github.com/abhaylodhi1/Dice-game",
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