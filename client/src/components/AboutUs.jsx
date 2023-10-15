import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At Healther, we are dedicated to connecting patients with highly skilled and compassionate doctors. We believe in empowering you to take control of your healthcare journey by providing you with the freedom to choose the healthcare professional who best suits your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
