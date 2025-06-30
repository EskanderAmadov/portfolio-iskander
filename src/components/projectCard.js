import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ title, description, image, repoLink, liveLink }) {
  return (
    <Card className="project-card h-100 border-0 shadow-sm">
      <div className="card-img-wrapper">
        <Card.Img variant="top" src={image} alt={`${title} preview`} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>
        <div className="d-flex justify-content-start gap-3 mt-3">
          <Button variant="dark" href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          {liveLink && (
            <Button variant="primary" href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Site
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
