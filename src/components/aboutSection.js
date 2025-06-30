import React from "react";
import aboutImage from "../assets/iskander-office.png";

function AboutSection() {
  return (
    <section id="about" className="about-section py-5 p-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">About Me</h2>
            <p>
              I'm a frontend developer based in Norway, recently graduated from Noroff (2025).
              I enjoy crafting clean, responsive web experiences and solving problems with modern web tools.
            </p>
            <p>
              Currently looking for opportunities as a junior frontend developer, I'm eager to collaborate,
              learn, and contribute to meaningful digital projects.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={aboutImage}
              alt="Eskander working"
              className="img-fluid w-75 rounded  about-img p-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
