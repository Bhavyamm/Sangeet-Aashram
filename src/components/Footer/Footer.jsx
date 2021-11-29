import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing <br />
        elit. In, aliquam nostrum minus dolor ab error.
      </p>

      <div className="icons">
        <i className="fa fa-facebook" />
        <i className="fa fa-twitter" />
        <i className="fa fa-instagram" />
        <i className="fa fa-youtube" />
        <i className="fa fa-telegram" />
        <i className="fa fa-linkedin" />
      </div>
    </section>
  );
};
// Facebook, Youtube, Twitter, Instagram, Telegram, Linkedin
export default Footer;
