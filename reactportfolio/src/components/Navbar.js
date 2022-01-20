import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="topnav" id="myTopnav">
      <h4 className=" my-name">Srilalitha Nookala</h4>
        <ul>
          <li>
            <NavLink to={"/"} className="link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects/"} className="link">Projects</NavLink>
          </li>
          <li>
            <NavLink to={"/resume"} className="link">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact/"} className="link">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );

}
export default Navbar;
