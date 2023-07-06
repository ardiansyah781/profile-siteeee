import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutTypo">
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
      </div>
      <div className="aboutContent">
        <h1 className="aboutInfo">
          Hello! I am Ardiansyah, I am passionate about{" "}
          <span className="outlined">developing applications</span> both{" "}
          <span className="outlined">user interface</span> and database{" "}
          <span className="outlined">management</span> system.
        </h1>

        <a href="#" className="aboutButton">
          Read More About Me <i class="uil uil-arrow-up-right"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
