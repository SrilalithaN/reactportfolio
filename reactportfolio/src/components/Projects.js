import React from "react";
import "../App.css";
import Portfolio from "./Portfolio";
import Projectdata from "../projectData";
import "bootstrap/dist/css/bootstrap.min.css";


function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}
function Projects() {
    return (
      <section class="work container column" id="work">
          <h2 className="work-title">My work</h2>
          <p className= "work-title">
          I have worked on some of the projects recently that I picked only for
            the portfolio.
          </p>
          
          <Wrapper id="card-data">
                {Projectdata.map((project) => (
                    <Portfolio
                    
                        image={project.image}
                        name={project.title}
                        description = { project.description}
                        github={project.github}
                        link={project.link}
                        techused={project.techused}
                    />
                ))}
            </Wrapper>
            </section>
    );
                }
export default Projects;