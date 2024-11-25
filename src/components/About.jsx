// src/components/About.js
import React from "react";
import Car from "./asset/bmwcar1.png"


const About = () => {
  return (
    <div className="about">
      <img src={Car} alt="BMW" className="about-image" />
      <div className="about-content">
        <h2>About BMW</h2>
        <p>BMW, known for luxury, power, and cutting-edge technology.</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default About;
