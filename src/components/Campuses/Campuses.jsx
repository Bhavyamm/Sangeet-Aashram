import React from "react";
import "./Campuses.css";
import London from "../../eduford_img/london.png";
import NewYork from "../../eduford_img/newyork.png";
import Washington from "../../eduford_img/washington.png";

const Campuses = () => {
  return (
    <section className="campus">
      <h1>Our Centers</h1>
      <hr className="campus-heading-underline" />

      <div className="row">
        <div className="campus-col">
          <img src={London} />
          <div className="layer">
            <h3>London</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src={NewYork} />
          <div className="layer">
            <h3>New York</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src={Washington} />
          <div className="layer">
            <h3>Washington</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campuses;
