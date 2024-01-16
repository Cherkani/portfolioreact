import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaDocker, FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/aymen-cherkani-a68b1224a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Cherkani"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://hub.docker.com/u/cherkani"
        target="_blank"
        rel="noreferrer"
      >
        <FaDocker/>
      </a>
    </div>
  );
};

export default HeaderSocials;
