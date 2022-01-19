
import React, { useState } from "react";
import { validateEmail } from "./utils/helpers";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage("please enter a valid email");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div id="contact-section">
            <div className="container" id = "contact">
                <h2 className="contact text-center">Contact Me</h2>
            </div>
            <div>
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <br></br>
                        <input className="form-control"  type="text" defaultValue={name} onBlur={handleChange} name="Name" />
                    </div>
                    <div className="form-group">
                        <label>Email address:</label>
                        <br></br>
                        <input className="form-control" type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
                    <div className="form-group">
                        <label >Message:</label>
                        <br></br>
                        <textarea  className="form-control" name="Message" defaultValue={message} onBlur={handleChange} rows="10" columns="30" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className='contactBtn'type="submit" onSubmit={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
            <div className="social-links">
            <span>
          <a href="https://github.com/SrilalithaN" target='_blank' rel="noopener noreferrer"> 
            <FontAwesomeIcon
              icon={faGithub}
              className="fa fa-github"
            ></FontAwesomeIcon>
          </a>
        </span>

        <span>
          <a href="https://linkedin.com/in/srilalitha-nookala" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa fa-linkedin"
            ></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a  href ="mailto:snookala.dev@gmail.com" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa fa-envelope"
            ></FontAwesomeIcon>
          </a>
        </span>
        </div>
        </div>
    );
}
