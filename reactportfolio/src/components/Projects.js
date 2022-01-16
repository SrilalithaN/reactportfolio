import React from "react";
import "../App.css";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/warehouse-manager1.png";
import project3 from "../assets/images/tech-blog1.png";
import project4 from "../assets/images/note-taker1.png";
import project5 from "../assets/images/weather-dashboard1.png";
import project6 from "../assets/images/text-editor.png";

function Projects() {
  return (
    <section class="work container column" id="work">
      <h2>My work</h2>
      <p>
        I have worked on some of the projects recently that I picked only for
        the portfolio.
      </p>

      <div class="work-items">
        <section class="project">
          {/* <!--Project-1--> */}
          <img src={project1} alt=" walking-track" class="project-image" />
          <div class="project-info">
            <h2>Tracking Journal</h2>
            <p class="tech-used">HTML/CSS/JavaScript/ jQuery/Web-APIs</p>
            <p class="project-description">
              Tracking Journal is an application for users to find parks around
              a certain radius for a given address and keep track of their
              experiences.
            </p>
            <a
              href="https://annanguyen1.github.io/Track-Journal/homepage.html"
              class="button"
            >
              VIEW APP
            </a>
            <a
              href="https://github.com/AnnaNguyen1/Track-Journal"
              class="button"
            >
              VIEW REPO
            </a>
          </div>
        </section>

        <section class="project">
          {/* <!--Project-2--> */}
          <img
            src={project2}
            alt=" login of warehouse-manager"
            class="project-image"
          />
          <div class="project-info">
            <h2>Warehouse on Wheels</h2>
            <p class="tech-used">
              HTML/Bulma-CSS/JavaScript/Express.js/Node.js/MySQl/Sequelize
            </p>
            <p class="project-description">
              Warehouse on Wheels is a warehouse management system for
              second-hand car dealers.
            </p>
            <a
              href="https://warehouse-manager-bootcamp.herokuapp.com/"
              class="button"
            >
              VIEW APP
            </a>
            <a
              href="https://github.com/SrilalithaN/warehouse-manager"
              class="button"
            >
              VIEW REPO
            </a>
          </div>
        </section>

        <section class="project">
          {/* <!--Project-3--> */}
          <img
            src={project3}
            alt=" landing page of tech-blog"
            class="project-image"
          />
          <div class="project-info">
            <h2>Tech-Blog</h2>
            <p class="tech-used">
              <b>HTML/CSS/JavaScript/Express.js/Node.js/MySQl/</b>
              Sequelize/Handlebars.js
            </p>
            <p class="project-description">
              This project uses the Model-View-Controller (MVC) paradigm to
              create a blog-style website.
            </p>
            <a href="https://tech-blog-sri.herokuapp.com/" class="button">
              VIEW APP
            </a>
            <a href="https://github.com/SrilalithaN/Tech-Blog" class="button">
              VIEW REPO
            </a>
          </div>
        </section>

        <section class="project">
          {/* <!--Project-4--> */}
          <img
            src={project4}
            alt="landing page of note-taker"
            class="project-image"
          />
          <div class="project-info">
            <h2>Note-taker</h2>
            <p class="tech-used">HTML/CSS/JavaScript/Node.js/Express.js</p>
            <p class="project-description">
              An application to write and save note with Express.js back end and
              will save and retrieve note data from JSON file.
            </p>
            <a href="https://note-taker-app-sri.herokuapp.com/" class="button">
              VIEW APP
            </a>
            <a href="https://github.com/SrilalithaN/Note-Taker" class="button">
              VIEW REPO
            </a>
          </div>
        </section>

        <section class="project">
          {/* <!--Project-5--> */}
          <img
            src={project5}
            alt="weather-dashboard landing page"
            class="project-image"
          />
          <div class="project-info">
            <h2>Weather-Dashboard</h2>
            <p class="tech-used">HTML/CSS/JavaScript/jQuery/Web-APIs</p>
            <p class="project-description">
              Weather Dashboard is an application to find weather conditions for
              a given city. It displays current weather and also a 5-day weather
              forecast.
            </p>
            <a
              href="https://srilalithan.github.io/Weather-Dashboard/"
              class="button"
            >
              VIEW APP
            </a>
            <a
              href="https://github.com/SrilalithaN/Weather-Dashboard"
              class="button"
            >
              VIEW REPO
            </a>
          </div>
        </section>

        <section class="project">
          {/* <!--Project-6--> */}
          <img
            src={project6}
            alt=" text-editor landing page"
            class="project-image"
          />
          <div class="project-info">
            <h2>Text-Editor PWA</h2>
            <p class="tech-used">HTML/CSS/JavaScript/Node.js/PWA/Express.js</p>
            <p class="project-description">
              Text Editor is a single page web application that runs in the
              browser and meets the PWA criteria. The application is installable
              and can function offline.
            </p>
            <a
              href="https://github.com/SrilalithaN/Text-Editor-PWA"
              class="button"
            >
              VIEW APP
            </a>
            <a href="https://text-editor-pwa.herokuapp.com/" class="button">
              VIEW REPO
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;
