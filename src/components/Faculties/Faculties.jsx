import React, { useEffect } from "react";
import "./Faculties.css";
import Library from "../../eduford_img/library.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Faculties = () => {
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
      {/* <section className="faculties"> */}
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
        <h1>Our Faculties</h1>
      </section>
      {/* <h1>Our Faculties</h1>
      <hr className="faculties-heading-underline" /> */}
      <section className="faculties">
        <div className="row">
          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="row">
          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="row">
          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="row">
          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="faculties-col">
            <img src={Library} />
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faculties;
