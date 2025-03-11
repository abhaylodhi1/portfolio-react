import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const slideInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <header
      id="home"
      ref={ref}
      className="h-96 flex flex-col justify-center items-center text-center bg-gray-900 text-white relative"
    >
      <motion.div
        className="container mx-auto p-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideInUp}
      >
        <h5 className="text-lg text-blue-400">Hello, I'm</h5>
        <h1 className="text-5xl font-extrabold text-white">Abhay Lodhi</h1>

        <h5 className="text-2xl font-semibold text-gray-300 mt-2">
          <Typewriter
            words={["Front-end Developer", "React Developer", "Next.js Enthusiast"]}
            loop={0} 
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>

        <CTA />

        <motion.a
          href="#contact"
          className="mt-6 inline-block text-blue-400 text-lg font-semibold hover:text-blue-500 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Scroll Down
        </motion.a>

        <HeaderSocials />
      </motion.div>
    </header>
  );
};

export default Header;
