import React from "react";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/projectsSection";
import HomeBanner from "./components/homeBanner";
import AboutSection from "./components/aboutSection";
import ServicesSection from "./components/servicesSection";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default App;
