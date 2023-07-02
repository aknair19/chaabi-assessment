import React from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.png";
import { navbarSections } from "../../constants";
const Navabar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={Logo} alt="logo/icon" width="192px" />
      </div>
      <ul className="navbar-nav">
        {navbarSections.map((sections, id) => {
          return (
            <li key={id} className="navbar-navitems">
              <img
                src={sections.icon}
                alt="dashboard"
                className="navbar-icons"
              />
              <span className="navbar-text">{sections.name}</span>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navabar;
