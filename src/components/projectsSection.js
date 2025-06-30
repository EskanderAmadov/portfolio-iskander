import React from "react";
import ProjectCard from "./projectCard";
import auctionImage from "../assets/auction.jpg";
import ecommerceImage from "../assets/ecommerce-store.jpg";
import examImage from "../assets/holidaze.jpg";

function ProjectsSection() {
  const projectData = [
    {
      title: "Auction Zone – Semester Project 2",
      description: "A full-featured auction platform built with React and the Noroff Auction API.",
      image: auctionImage,
      repoLink: "https://github.com/EskanderAmadov/auction-zone",
      liveLink: "https://auction-zone-ia.netlify.app/",
    },
    {
      title: "E-Commerce Store – JavaScript Frameworks CA",
      description: "A responsive online store built with React, Bootstrap, and public API data.",
      image: ecommerceImage,
      repoLink: "https://github.com/EskanderAmadov/ecommerce-store",
      liveLink: "https://bucolic-lokum-7d5416.netlify.app/",
    },
    {
      title: "Holidaze – Project Exam 2",
      description: "Final project showcasing advanced frontend skills with API integration.",
      image: examImage,
      repoLink: "https://github.com/EskanderAmadov/Holidaze-Iskander",
      liveLink: "https://holidaze-iskander.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="projects-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-4">Portfolio</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
