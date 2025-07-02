import React, { useEffect } from "react";
import AboutHero from "./AboutComponents/AboutHero";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <AboutHero></AboutHero>
    </div>
  );
};

export default About;
