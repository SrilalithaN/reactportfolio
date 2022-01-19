import React from "react";
import "../App.css";

import projectdata from "../projectData";





function Projects() {
    return (
      <section class="work container column" id="work">
          <h2 className="work-title">My work</h2>
          <p className= "work-title">
          I have worked on some of the projects recently that I picked only for
            the portfolio.
          </p>
          
          <div class="work-items">
          {projectdata.map((project) => (
        <section class="project" key = {project.id}>
          <img src={require(`${project.image}`)} alt='project screenshots' class="project-image" />
          <div class="project-info">
            <h2>{project.title}</h2>
            <p class="tech-used">{project.techused}</p>
            <p class="project-description">
               {project.description}
            </p>
            <a
              href={project.link}
              class="button"
            >
              VIEW APP
            </a>
            <a
              href={project.github}
              class="button">
              VIEW REPO
            </a>
       </div>
       </section>
          ))}

      </div> 
</section>
        
    );
                }
export default Projects;