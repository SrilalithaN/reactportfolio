import React from "react";
import "../App.css";

function Header() {
  return (
    <div id="home">
      <header>
        <h1>
          Hello! I'm <span>Srilalitha </span>a full-stack developer.
        </h1>
        <span>
          <a href="https://github.com/SrilalithaN">
            <i className="fa fa-github"></i>
          </a>
        </span>
        <span>
          <a href="www.linkedin.com/in/srilalitha-nookala">
            <i className="fa fa-linkedin"></i>
          </a>
        </span>
        <span>
          <a href="mailto:srilalitha.ganti@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
        </span>
      </header>
    </div>
  );
}

export default Header;
