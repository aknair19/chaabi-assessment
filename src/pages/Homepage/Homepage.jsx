import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import './homepage.css'
const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <Section/>
    </div>
  );
};

export default Homepage;
