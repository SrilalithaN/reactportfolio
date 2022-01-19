import React from "react";
import "../App.css";
import projectsdata from "../projectData";

function Projects() {
    return (
      <section className="work container column" id="work">
          <h2 className="work-title">My work</h2>
          <p className= "work-title">
          I have worked on some of the projects recently that I picked only for
            the portfolio.
          </p>
          
          <div className="work-items">
          {projectsdata.map((project) => (
            <section className="project" key = {project.id}>
              <img src={project.image} alt='project screenshots' className="project-image" />
                 <div className="project-info">
                    <h2>{project.title}</h2>
                     <p className="tech-used">{project.techused}</p>
                     <p className="project-description"> {project.description} </p>
               <a href={project.link} className="button">
                   VIEW APP
               </a>
            <a href={project.github}  className="button">
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