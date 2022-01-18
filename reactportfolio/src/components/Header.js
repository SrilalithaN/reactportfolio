import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div id="home">
      <header className="header">
        <h1 className="text-center">Srilalitha</h1>
      </header>
      <div className="shortBio">
        <p className="shortBio">
          Full Stack Developer. Passionate Programmer. Always Learning!
        </p>

        <span>
          <a href="https://github.com/SrilalithaN">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa fa-github"
            ></FontAwesomeIcon>
          </a>
        </span>

        <span>
          <a href="www.linkedin.com/in/srilalitha-nookala">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa fa-linkedin"
            ></FontAwesomeIcon>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Header;
