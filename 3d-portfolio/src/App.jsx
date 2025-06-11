import { useState } from "react";
import "./App.css";
import Hero from "./section/Hero.jsx";
import ShowcaseSection from "./section/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./section/LogoSection.jsx";
import FeatureCards from "./section/FeatureCards.jsx";
import ExperienceSection from "./section/Experience.jsx";
import TechStack from "./section/TechStack.jsx";
import Testimonials from "./section/Testimonials.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      < FeatureCards />
      < ExperienceSection />
      < TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
