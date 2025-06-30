import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

function ServicesSection() {
  return (
    <section id="services" className="services-section py-5 text-center bg-light">
      <div className="container">
        <h2 className="fw-bold mb-5 mt-5 ">What I Can Help With</h2>
        <div className="row">
          <div className="col-md-4 mb-4 ">
            <FaCode size={40} className="mb-3 service-icon" />
            <h5>Frontend Development</h5>
            <p>Modern, responsive websites using React, HTML, CSS & JavaScript.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaPaintBrush size={40} className="mb-3 service-icon" />
            <h5>UI/UX Design</h5>
            <p>Wireframing and prototyping in Figma or Adobe XD with accessibility in mind.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaMobileAlt size={40} className="mb-3 service-icon" />
            <h5>Responsive Layout</h5>
            <p>Mobile-first design with flexible grid systems and adaptive content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
