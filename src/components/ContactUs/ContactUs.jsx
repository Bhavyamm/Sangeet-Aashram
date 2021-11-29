import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./ContactUs.css";
import apiKey from "./emailKey";
import emailjs from "emailjs-com";

const ContactUs = () => {
  let navLinks;
  useEffect(() => {
    navLinks = document.getElementById("navLinks");

    console.log(navLinks, "nav links");
  }, []);

  const showMenu = () => {
    navLinks.style.right = "0px";
  };

  const hideMenu = () => {
    navLinks.style.right = "-200px";
  };

  const handleSubmit = (e) => {
    console.log(apiKey, "api key");
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <div>
      <section className="sub-header">
        <nav className="header-nav">
          <Link to="/">
            {/* <i className="fa fa-guitar" style={{ color: "#fff" }}></i> */}
          </Link>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/activities">Activities</Link>
              </li>
              <li>
                <Link to="/faculties">Faculties</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>
        <h1>Contact Us</h1>
      </section>

      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14227.046043042998!2d75.8032836!3d26.9427741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f7a70cb4da60bb5!2sSangeet%20Aashram!5e0!3m2!1sen!2sin!4v1638202952132!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-form">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>XYZ Road, ABC Building</h5>
                <p>Bangalore, Karnataka, IN</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+91-123-456-7890</h5>
                <p>Mon-Fri 9am-6pm</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>abc@gmail.com</h5>
                <p>Send us your query anytime!</p>
              </span>
            </div>
          </div>

          <div className="contact-col">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required name="name" />
              <input
                type="email"
                placeholder="Email Address"
                required
                name="email"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                name="subject"
              />
              <textarea
                rows="8"
                placeholder="Message"
                required
                name="message"
              ></textarea>
              <button type="submit" className="hero-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
