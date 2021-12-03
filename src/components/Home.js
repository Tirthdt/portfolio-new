import React, { useRef } from "react";
import { StyledSection } from "../styled/Section.styled";
import { Button } from "../styled/Button.styled";
import Header from "./Header";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  const downLoadRef = useRef(null);

  return (
    <StyledSection id="home">
      <Header />
      <div className="intro">
        <Slide>
          <h2>Hello</h2>
        </Slide>
        <Slide delay={300}>
          <p>
            I am a Computer Engineering Graduate and a software developer who is
            proficient in Web development. I have used many technologies like
            React and Angular to build webapps.
          </p>
        </Slide>
        <Slide delay={400}>
          <Button onClick={(e) => downLoadRef.current.click()}>Resume</Button>
        </Slide>
        <a
          ref={downLoadRef}
          href="/assets/resume.pdf"
          download
          style={{ display: "none" }}
        >
          download
        </a>
      </div>
    </StyledSection>
  );
};

export default Home;
