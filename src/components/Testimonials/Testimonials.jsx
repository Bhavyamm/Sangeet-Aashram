import React from "react";
import "./Testimonials.css";
import User1 from "../../eduford_img/user1.jpg";
import User2 from "../../eduford_img/user2.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What our students say</h1>
      <hr className="testimonials-heading-underline" />

      <div className="row">
        <div className="testimonials-col">
          <img src={User1} />
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              nobis libero. Non, quasi consequatur? Quidem.
            </p>
            <h3>Name</h3>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
          </div>
        </div>

        <div className="testimonials-col">
          <img src={User2} />
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              nobis libero. Non, quasi consequatur? Quidem.
            </p>
            <h3>Name</h3>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-o" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="testimonials-col">
          <img src={User1} />
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              nobis libero. Non, quasi consequatur? Quidem.
            </p>
            <h3>Name</h3>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
          </div>
        </div>

        <div className="testimonials-col">
          <img src={User2} />
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              nobis libero. Non, quasi consequatur? Quidem.
            </p>
            <h3>Name</h3>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-o" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
