import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_kez93ee",
        "template_u21v9vg",
        formRef.current,
        "fFp_TCrh4sdg93QXT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 text-center bg-gray-900 text-white" ref={ref}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={slideInLeft}>
        <h5 className="text-lg text-gray-400">Get In Touch</h5>
        <h5 className="text-gray-300 mb-6">
          I do receive your messages and will respond asap if a valid email is provided :)
        </h5>
        <h2 className="text-3xl font-bold text-blue-400">Contact Me</h2>
      </motion.div>

      <div className="w-4/5 mx-auto grid md:grid-cols-2 gap-12 mt-10">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={slideInLeft}>
          <motion.article
            className="bg-gray-800 p-6 rounded-lg text-center border border-transparent transition-all hover:bg-gray-700 hover:border-blue-400 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <MdOutlineEmail className="text-3xl mb-2 text-blue-400" />
            <h4 className="font-semibold text-white">Email</h4>
            <h5 className="text-gray-400">abhaylodhi2001@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhaylodhi2001@gmail.com"
              className="text-sm text-blue-400 hover:underline"
            >
              Send a message
            </a>
          </motion.article>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-gray-200 bg-gray-800 p-6 rounded-lg shadow-lg"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInLeft}
        >
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
            className="w-full p-4 rounded-md bg-gray-700 border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            className="w-full p-4 rounded-md bg-gray-700 border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your message"
            rows="5"
            name="message"
            required
            className="w-full p-4 rounded-md bg-gray-700 border-2 border-blue-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-blue-400 text-gray-900 px-6 py-3 rounded-md font-semibold transition-all hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
          {message && <span className="text-sm text-green-400">Thanks, I'll reply ASAP :)</span>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;