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
      link: "https://www.linkedin.com/in/sharthak-acharjee-6195b7112/",
      name: "Sharthak Acharjee",
      role: "SQL Developer. Optimizing databases and enhancing performance, one query at a time.",
      test: "You are found to be hardworking, enthusiastic and diligent during your internship. We highly appreciate your accomplishments and wish you the best for the future.",
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