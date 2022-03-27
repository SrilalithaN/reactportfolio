import image1 from "./assets/images/project-1.png";
import image2 from "./assets/images/warehouse-manager1.png";
import image3 from "./assets/images/tech-blog1.png";
import image4 from "./assets/images/text-editor.png";
import image5 from "./assets/images/note-taker1.png";
import image6  from "./assets/images/patientAppointment.png";


const projectsdata = [
    {  
      id: "1",
      title: "Tracking Journal",
      techused: "JavaScript/ jQuery/Web-APIs",
      description: "Tracking Journal is an application for users to find parks around a certain radius for a given address and keep track of their experiences." ,
      image: image1,
      link: "https://annanguyen1.github.io/Track-Journal/homepage.html",
      github: "https://github.com/SrilalithaN/Track-Journal",
    },
    {
      id: "2",
      title: "Warehouse on Wheels",
      techused: "JavaScript/Express.js/Node.js/MySQl/Sequelize",
      description:
    "  Warehouse on Wheels is a warehouse management system for second-hand car dealers.",
      image: image2,
      link: "https://warehouse-manager-bootcamp.herokuapp.com/",
      github: "https://github.com/SrilalithaN/warehouse-manager",
    },
    {
      id: "3",
      title: "Patient-Appointment Booking System ",
      techused: " MERN (Mongo,Express,React,Node) Stack",
    description : "This project is a website for a private clinic with a main feature to book,cancel and view appointments",
      image: image6,
      link: "https://mysterious-beach-71045.herokuapp.com/",
      github: "https://github.com/SrilalithaN/Patient-Appointment-BookingSystem",
    },
    {
      id: "4",
      title: "Tech-Blog",
      techused: " JavaScript/Express/MySQL/Handlebars",
    description : " This project uses the Model-View-Controller (MVC) paradigm to create a blog-style website.",
      image: image3,
      link: "https://tech-blog-sri.herokuapp.com/",
      github: "https://github.com/SrilalithaN/Tech-Blog",
      },
      {
        id: "5",
        title: "Text-Editor PWA",
        techused: "HTML/CSS/JavaScript/Node.js/PWA/Express.js",
        description:
          "Text Editor is a single page web application that runs in the browser and meets the PWA criteria.",
        image: image4,
        link: "https://text-editor-pwa.herokuapp.com/",
        github: "https://github.com/SrilalithaN/Text-Editor-PWA",
      },
    
    {
      id: "6",
      title: "Note-taker",
        techused: "JavaScript/Node.js/Express.js",
        description:
          "An application to write and save note with Express.js back end and will save and retrieve note data from JSON file.",
        image: image5,
        link: "https://note-taker-app-sri.herokuapp.com/",
        github: "https://github.com/SrilalithaN/Note-Taker",
    },

  ];
  
  export default projectsdata;