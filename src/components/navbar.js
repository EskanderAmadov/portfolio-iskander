import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Iskander</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#services">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
