import React from "react";
import resume from '../assets/SrilalithaCV.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default function Resume() {
    return (

<div className="bioTextContainer">
       
            <div className="download">Download my resume   :</div>
            <a href={resume} target='_blank' rel="noopener noreferrer">
               <FontAwesomeIcon icon= {faDownload} className=" fa-download resume"></FontAwesomeIcon>
            </a>
            
                
                <div className="bioText">
                  <h4>
                    <b>Technical Skills:</b>
                  </h4>
                  <ul>
                    <li>
                      <b>Programming Languages:</b> HTML, CSS, Javascript
                    </li>
                    <li>
                      <b>Database Management:</b> Mysql, Sequelize MongoDb,
                      Mongoose
                    </li>
                    <li>
                      <b>Libraries / Frameworks: </b>jQuery, React.js, Redux,
                      Express.js, Bootstrap
                    </li>
                    <li>
                      <b>Other Technologies: </b>Node.js, 
                      Handlebars, Git, Heroku, JWT Auth, AJAX, IndexedDB API
                    </li>
                  </ul>
         
                </div>
                </div>
    );
}