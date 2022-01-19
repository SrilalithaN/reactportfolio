import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/projects" element={<Projects/>} />
             <Route exact path="/contact" element={<Contact/>} /> 
            <Route path="/reactportfolio" element={<About />} />
            <Route path="/resume" element={<Resume />} />
         
 
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
