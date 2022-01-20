
import React, { useState } from "react";
import { validateEmail } from "./utils/helpers";
import "../App.css";

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
           
        </div>
    );
}
