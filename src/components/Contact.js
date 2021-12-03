import React from "react";
import { JackInTheBox, Slide, Roll } from "react-awesome-reveal";
import { StyledSection } from "../styled/Section.styled";

const Contact = () => {
  return (
    <StyledSection id="contact" noMin>
      <JackInTheBox>
        <h2 className="section-header">Contact Me</h2>
      </JackInTheBox>
      <Slide>
        <p>You can always reach me out through below mediums.</p>
      </Slide>
      <div className="logos">
        <Roll cascade>
          <a href="mailto:tirtht2@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope-square"></i>
          </a>
          <a href="https://github.com/Tirthdt" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tirth-trivedi/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/tirth_tdt/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
        </Roll>
      </div>
    </StyledSection>
  );
};

export default Contact;
