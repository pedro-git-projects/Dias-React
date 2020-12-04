import React from "react";
import lofi from "../img/lofi.png";

const AboutSection = () => {
  return(
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Gabriel Dias</h2>
          </div>
          <div className="hide">
            <h2>Illustrator based in <span>Brazil</span> come</h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>Contact Me for Comissions and Illustrations</p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={lofi} alt="Hardwired Lofi"/>
      </div>
    </div>
  )
}

export default AboutSection;
