import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1 className="course-h1">Courses we offer</h1>
      <hr className="course-heading-underline" />

      <div className="row">
        <div className="course-col">
          <h3>String Instruments</h3>
          <hr className="course-underline" />
          <ul>
            <li>Acoustic Guitar</li>
            <li>Electric Guitar</li>
            <li>Ukelele</li>
            <li>Guitarlele</li>
            <li>Sitar</li>
            <li>Sarod</li>
          </ul>
        </div>

        <div className="course-col">
          <h3>Wind Instruments</h3>
          <hr className="course-underline" />
          <ul>
            <li>Flute</li>
            <li>Saxophone</li>
            <li>Trumpet</li>
            <li>Recorder</li>
            <li>Harmonica</li>
            <li>Mouth Organ</li>
          </ul>
        </div>

        <div className="course-col">
          <h3>Keys</h3>
          <hr className="course-underline" />
          <ul>
            <li>Piano</li>
            <li>Harmonium</li>
            <li>Electronic Keyboard</li>
            <li>Accordion</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="course-col">
          <h3>Percussion Instruments</h3>
          <hr className="course-underline" />
          <ul>
            <li>Drum</li>
            <li>Tabla</li>
            <li>Congo</li>
            <li>Cajon</li>
            <li>Auxillary Percussion Instruments</li>
          </ul>
        </div>

        <div className="course-col">
          <h3>Dance</h3>
          <hr className="course-underline" />
          <ul>
            <li>Kathak</li>
            <li>Bharatnatyam</li>
            <li>Manipuri</li>
            <li>Folk</li>
            <li>Hip-Hop</li>
            <li>Salsa</li>
            <li>Break Dance</li>
            <li>Tap Dance</li>
            <li>Free Style</li>
            <li>Contemporary</li>
          </ul>
        </div>

        <div className="course-col">
          <h3>Vocals</h3>
          <hr className="course-underline" />
          <ul>
            <li>Indian Classical</li>
            <li>Light Music</li>
            <li>Folk</li>
            <li>Bollywood</li>
          </ul>
        </div>
      </div>

      <div className="second-row">
        <div className="course-col">
          <h3>Other Instruments</h3>
          <hr className="course-underline" />
          <ul>
            <li>Xylophone</li>
            <li>Santoor</li>
            <li>Kalimba</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Courses;
