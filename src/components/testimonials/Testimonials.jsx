import React, { useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/",
      name: "Nəsibəli YUSIBOV",
      role: "Cyber Security Engineer . Improving open-source projects, one commit at a time.",
      test: "As a developer and a problem solver, I think Rasif is a great collaborative partner to have. I met Rasif in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/raul-omarov-7841b7201/",
      name: "Raul Omarov",
      role: "Full-stack developer | Technical Support Engineer at Microverse",
      test: "It was a pleasure collaborating with Rasif on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
  ];

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="testimonials" ref={ref} className="py-16 text-center bg-gray-900 text-white">
      <motion.h5 className="text-lg text-gray-400" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={slideInUp}>
        Feedback from my peers
      </motion.h5>
      <motion.h2 className="text-3xl font-bold text-blue-400" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={slideInUp}>
        Testimonials
      </motion.h2>

      <Swiper
        className="w-4/5 mx-auto mt-8"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test, index) => (
          <SwiperSlide key={test.id}>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-left flex flex-col items-center transition-all hover:bg-gray-700"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <a href={test.link} target="_blank" rel="noreferrer" className="text-blue-400 text-3xl">
                  <BsLinkedin />
                </a>
                <h5 className="text-xl font-semibold mt-4">{test.name}</h5>
                <p className="text-sm text-gray-300">{test.role}</p>
              </div>
              <p className="text-gray-300 text-center mt-4 px-4">{test.test}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;