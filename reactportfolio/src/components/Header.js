import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div id="home">
      <header>
        <h1>
          Hello! I'm <span>Srilalitha </span>a full-stack developer.
        </h1>

        <a href="https://github.com/SrilalithaN">
          <FontAwesomeIcon
            icon={faGithub}
            className="fa fa-github"
          ></FontAwesomeIcon>
        </a>

        <a href="www.linkedin.com/in/srilalitha-nookala">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fa fa-linkedin"
          ></FontAwesomeIcon>
        </a>

        <a href="mailto:srilalitha.ganti@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa fa-envelope"
          ></FontAwesomeIcon>
        </a>
      </header>
    </div>
  );
}

export default Header;
