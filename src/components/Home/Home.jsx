import React from "react";
import Campuses from "../Campuses/Campuses";
import Courses from "../Courses/Courses";
import Faculties from "../Faculties/Faculties";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Online from "../OnlineSection/Online";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Courses />
      <Campuses />
      {/* <Faculties /> */}
      <Testimonials />
      <Online />
      <Footer />
    </>
  );
};

export default Home;
