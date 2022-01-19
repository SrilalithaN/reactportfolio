import React ,{useEffect} from "react";
import "../App.css";
import meimg from '../assets/images/mypic.jpg';

function About() {
  useEffect(() => {
    if (window.screen.width > 681) {
      const skills = document.getElementById("skills");
      const skillsHeight = skills.offsetHeight;
      const mePic = document.getElementById("mePic");
      mePic.style.height = `${skillsHeight}px`;
    }
  });
  return (

    <div className="container-fluid" id="aboutSect">
      <div className="row">
        <div className="offset-lg-1 col-lg-10">
          <div className="main" id="about">
            <h2 >About Me</h2>
            <div id="picWrapper">
              <div id="picAndTextContainer">
                <img className="me-pic img-fluid" id="mePic" src={meimg} alt="Me" />
                <div className="skills" id="skills">
                  <p>
                  Hi! I am Srilalitha and I am a full-stack Web Developer I love problem
       solving, using my creativity and critical thinking to find solutions. I
       also enjoy working in collaboration with others to find even better
       solutions. Having a curious mind, I don’t mind stepping out of my
        comfort zone because I like the stimulation of learning new things -
        that space of continuous learning that leads to improvement. I also
        enjoy the process of transforming ideas into reality and making things
        happen. In addition, I want to create a positive difference and becoming
         a developer is where I feel I can contribute my skills and passion
                  </p>
                </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}
export default About;
