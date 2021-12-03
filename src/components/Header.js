import React, { useState } from "react";
import { StyledHeader } from "../styled/Header.styled";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <StyledHeader>
      <nav className="navbar">
        <Fade duration={1000}>
          <a href="#home" className="nav-logo">
            <code>{"<"}</code>Tirth<code>{"/>"} </code>
          </a>
        </Fade>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <Fade cascade duration={500}>
            <li className="nav-item">
              <a
                onClick={(e) => setisOpen(!isOpen)}
                href="#home"
                className="nav-link"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => setisOpen(!isOpen)}
                href="#skills"
                className="nav-link"
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => setisOpen(!isOpen)}
                href="#projects"
                className="nav-link"
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => setisOpen(!isOpen)}
                href="#contact"
                className="nav-link"
              >
                CONTACT
              </a>
            </li>
          </Fade>
        </ul>
        <div
          className={isOpen ? "hamburger active" : "hamburger"}
          onClick={(e) => setisOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
