import React from "react";
import { StyledSection } from "../styled/Section.styled";
import { Skill } from "../styled/Utilities";

import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

const Skills = () => {
  const skillsArray = [
    {
      name: "HTML",
      alt: "html-icon",
      bg: "#E65222",
      src: "/assets/html.svg",
    },
    {
      name: "CSS",
      alt: "css-icon",
      bg: "#0477BD",
      src: "/assets/css.svg",
    },
    {
      name: "JS",
      alt: "js-icon",
      bg: "#FFD738",
      src: "/assets/javascript.svg",
    },
    {
      name: "NodeJS",
      alt: "node-icon",
      bg: "#49A367",
      src: "/assets/node.svg",
    },
    {
      name: "Angular",
      alt: "angular-icon",
      bg: "#E74C3C",
      src: "/assets/angular.svg",
    },
    {
      name: "React",
      alt: "react-icon",
      bg: "#80DDE9",
      src: "/assets/react.svg",
    },
    {
      name: "Firebase",
      alt: "firebase-icon",
      bg: "#FECA36",
      src: "/assets/firebase.svg",
    },
    {
      name: "SCSS",
      alt: "scss-icon",
      bg: "#F06292",
      src: "/assets/scss.svg",
    },
    {
      name: "Python",
      alt: "python-icon",
      bg: "#FEC135",
      src: "/assets/python.svg",
    },
  ];

  return (
    <StyledSection id="skills">
      <JackInTheBox>
        <h2 className="section-header">Skills</h2>
      </JackInTheBox>
      <div className="flex">
        <Slide duration={1000}>
          <article>
            <p>
              Over the past couple of years, I have been slowly and gradually
              improving my skills in the area of web development and it has been
              a roller coaster ride or a{" "}
              <span className="highlight">CSS overflow issue</span> I must say.
              At the beginning, I only knew JS which I learnt from Udemy and
              then I learnt Angular which gave me confidence to make webapps.
              But then I started learning React and I just fell in Love with it.
              Currently, I am developing webapps with React and also learning my
              way up in that process.
            </p>
          </article>
        </Slide>
        <Fade cascade duration={300}>
          <div className="images">
            {skillsArray.map((skill) => {
              return (
                <Skill
                  className={"skill " + skill.name}
                  key={skill.name}
                  bg={skill.bg}
                  text="#fff"
                >
                  <img src={skill.src} alt={skill.alt} />
                  <span className="title">{skill.name}</span>
                </Skill>
              );
            })}
          </div>
        </Fade>
      </div>
    </StyledSection>
  );
};

export default Skills;
