import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
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
    <>
      <section className="header">
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

        <div className="text-box">
          <h1>World's Biggest University</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> cumque incidunt laboriosam ipsam fuga similique, eum dolorem?
          </p>
          <Link to="/" className="hero-btn">
            Visit us to know more
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
