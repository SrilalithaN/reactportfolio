import React from "react";
import "../App.css";
// import project1 from "../assets/images/project-1.png";
// import project2 from "../assets/images/warehouse-manager1.png";
// import project3 from "../assets/images/tech-blog1.png";
// import project4 from "../assets/images/note-taker1.png";
// import project5 from "../assets/images/weather-dashboard1.png";
// import project6 from "../assets/images/text-editor.png";

function Portfolio(props) {
  return (
    // <section class="work container column" id="work">
    //     <h2 className="work-title">My work</h2>
    //     <p className= "work-title">
    //     I have worked on some of the projects recently that I picked only for
    //       the portfolio.
    //     </p>

        <div class="work-items">
        <section class="project">
          {/* <!--Project-1--> */}
          <img src={props.image} alt={props.name} class="project-image" />
          <div class="project-info">
            <h2>{props.name}</h2>
            <p class="tech-used">{props.techused}</p>
            <p class="project-description">
               {props.description}
            </p>
            <a
              href={props.link}
              class="button"
            >
              VIEW APP
            </a>
            <a
              href={props.github}
              class="button">
              VIEW REPO
            </a>
       </div>


      </section> 
      </div>
     
      );
}

export default Portfolio;
