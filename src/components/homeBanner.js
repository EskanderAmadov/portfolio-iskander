import React from "react";
import { Button } from "react-bootstrap";
import eskanderImage from "../assets/iskander-portrait.jpg";

function HomeBanner() {
  return (
    <section className="home-banner d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          {/* Text */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="headline">Iskander Amadov</h1>
            <p className="subtext">
              I'm a frontend developer based in Norway, recently graduated from Noroff. I'm currently looking for a junior position where I can grow, contribute, and create intuitive, user-friendly web experiences.
              Passionate about clean code, accessible design, and modern frontend technologies.
            </p>
            <Button variant="primary" size="lg" href="#projects" className="cta-btn mt-4">
              View My Work
            </Button>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0 d-none d-md-block">
            <div className="banner-img-wrapper">
              <img
                src={eskanderImage}
                alt="Eskander profile"
                className="img-fluid banner-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>
    </section>
  );
}

export default HomeBanner;
