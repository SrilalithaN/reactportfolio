import React from "react";
import "../App.css";
import{ NavLink} from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="topnav" id="myTopnav">
        <ul>
          <li>
            <NavLink to={"/"} className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about/"} className="link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects/"}>Projects</NavLink>
          </li>
          {/* <li>
          <a href="work.html" target="_blank">
            Work
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="./assets/SrilalithaCV.pdf" target="_blank">
            Resume
          </a>
        </li> */}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
