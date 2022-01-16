import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="warapper">
      <div className="content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route path="/" component={Header} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
