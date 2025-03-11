import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="flex justify-center gap-8 mt-8">
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/abhaylodhi/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 text-4xl transition-transform transform hover:scale-125"
      >
        <BsLinkedin />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/abhaylodhi1"
        target="_blank"
        rel="noreferrer"
        className="text-gray-300 text-4xl transition-transform transform hover:scale-125"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
