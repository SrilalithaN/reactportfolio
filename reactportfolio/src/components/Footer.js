import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
<footer>
<div className="copy">
<p>© 2022 by Srilalitha. All rights reserved.</p>
</div>
<div className="social-links">
            <span>
          <a href="https://github.com/SrilalithaN" target='_blank' rel="noopener noreferrer"> 
            <FontAwesomeIcon
              icon={faGithub}
              className="fa fa-github"
            ></FontAwesomeIcon>
          </a>
        </span>

        <span>
          <a href="https://linkedin.com/in/srilalitha-nookala" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa fa-linkedin"
            ></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a  href ="mailto:snookala.dev@gmail.com" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa fa-envelope"
            ></FontAwesomeIcon>
          </a>
        </span>
        </div>
</footer>
  );
}
export default Footer;