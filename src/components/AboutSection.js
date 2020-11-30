import React from "react";
import lofi from "../img/lofi.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Gabriel Dias</h2>
          </div>
          <div className="hide">
            <h2>Illustrator based</h2>
          </div>
          <div className="hide">
            <h2>in <span>Brazil</span>.</h2>
          </div>
        </div>
        <p>Contact me for commisions and illustrations.</p>
        <button>Contact me</button>
            <img src={lofi} alt="lofi"/>
      </div>
    </div>
  );
};

export default AboutSection;
