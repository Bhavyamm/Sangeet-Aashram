import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./CourseScreen.css";
import Certificate from "../../eduford_img/certificate.jpg";

const CourseScreen = () => {
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
        <h1>Our Certifications and Online Programs</h1>
      </section>

      <section className="about-us-content">
        <div className="row">
          <div className="about-us-col">
            <h1>We're the world's largest university</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium enim libero tempore qui cumque, aliquam provident. Ad
              porro deleniti ducimus repellat? Velit consequuntur vel excepturi
              dignissimos doloremque eaque eum veritatis?
            </p>
            <Link to="" className="hero-btn">
              Explore Now
            </Link>
          </div>
          <div className="about-us-col">
            <img src={Certificate} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseScreen;
