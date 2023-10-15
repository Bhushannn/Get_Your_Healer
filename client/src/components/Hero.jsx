import React from "react";
import image from "../images/background.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Because Your Health<br />
          Matters Most
        </h1>
        <p>
        At ChooseYourHealer, we're here to simplify your healthcare choices. Find the perfect doctor who aligns with your needs and preferences. Your health, your choice, always.
        </p>
      </div>
      <div className="hero-img">
        {/* <img
          src={image}
          alt="hero"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
