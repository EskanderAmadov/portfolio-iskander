import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 text-center">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Eskander Amadov</p>
        <p className="mb-0">
          <a href="mailto:eskander.amadov@gmail.com" className="text-light text-decoration-none">eskander.amadov@gmail.com</a> ·{" "}
          <a href="https://github.com/EskanderAmadov/EskanderAmadov" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
