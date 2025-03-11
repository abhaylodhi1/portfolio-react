import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 px-6 py-3 rounded-full flex gap-6 shadow-lg z-50">
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={`text-xl p-3 rounded-full transition-all ${
          activeNav === "#home" ? "bg-blue-400 text-gray-900" : "text-gray-400 hover:text-blue-400"
        }`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`text-xl p-3 rounded-full transition-all ${
          activeNav === "#about" ? "bg-blue-400 text-gray-900" : "text-gray-400 hover:text-blue-400"
        }`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`text-xl p-3 rounded-full transition-all ${
          activeNav === "#experience" ? "bg-blue-400 text-gray-900" : "text-gray-400 hover:text-blue-400"
        }`}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={`text-xl p-3 rounded-full transition-all ${
          activeNav === "#portfolio" ? "bg-blue-400 text-gray-900" : "text-gray-400 hover:text-blue-400"
        }`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`text-xl p-3 rounded-full transition-all ${
          activeNav === "#contact" ? "bg-blue-400 text-gray-900" : "text-gray-400 hover:text-blue-400"
        }`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Topbar;
