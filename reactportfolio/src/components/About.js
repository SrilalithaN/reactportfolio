import React from "react";
import "../App.css";
import meimg from "../assets/images/image.png";

function About() {
  return (
    <section class="about" id="about">
      <h2 class="about-me">About Me</h2>
      <img className="profile-img" id="profile" src={meimg} alt="me" />
      <div class="description">
        <b>Hi! I am Srilalitha and I am a full-stack Web Developer</b>
        <b>
          I love problem solving, using my creativity and critical thinking to
          find solutions.
        </b>
        <b>
          I also enjoy working in collaboration with others to find even better
          solutions.
        </b>
        <b>
          Having a curious mind, I don’t mind stepping out of my comfort zone
          because I like the stimulation of learning new things - that space of
          continuous learning that leads to improvement.
        </b>
        <b>
          I also enjoy the process of transforming ideas into reality and making
          things happen.
        </b>
        In addition, I want to create a positive difference and becoming a
        developer is where I feel I can contribute my skills and passion
      </div>
    </section>
  );
}
export default About;