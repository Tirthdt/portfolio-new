import React from "react";
import { StyledSection } from "../styled/Section.styled";
import { ImageContainer } from "../styled/Utilities";
import { Fade, JackInTheBox } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      title: "Shopify",
      imgPath: "/assets/Shopify.png",
      description: "An e-commerce app create using MERN stack.",
      url: "https://shopifymernapp.herokuapp.com/",
      repo: "https://github.com/Tirthdt/MERN-Shop",
    },
    {
      title: "The Shubham Marketing",
      imgPath: "/assets/TSM.png",
      description:
        "A cross-platform app built to connect local manufacturers and buyers.",
      url: "https://theshubhammarketing.com/",
      repo: null,
    },
    {
      title: "Calculator",
      imgPath: "/assets/Calculator.png",
      description: "A simple calculator app created using vanilla JS.",
      url: "https://tirthdt.github.io/CalculatorJS/",
      repo: "https://github.com/Tirthdt/CalculatorJS",
    },
    {
      title: "Rock Paper Scissor",
      imgPath: "/assets/RockPaperScissor.png",
      description: "Bored? How about a game of Rock-Paper-Scissor!!",
      url: "https://tirthdt.github.io/RockPaperScissor-JS/",
      repo: "https://github.com/Tirthdt/RockPaperScissor-JS",
    },
    {
      title: "Insta-Fire",
      imgPath: "/assets/InstaFire.png",
      description:
        "An instagram clone with a different style made with React and Firebase.",
      url: "http://app-instafire.herokuapp.com/",
      repo: "https://github.com/Tirthdt/instafire",
    },
    {
      title: "SunnySide Landing Page",
      imgPath: "/assets/SunnySide.png",
      description: "A challenge site from the frontendmentor.io",
      url: "https://tirthdt.github.io/SunnySide-Landing-Page/",
      repo: "https://github.com/Tirthdt/SunnySide-Landing-Page",
    },
  ];

  return (
    <StyledSection id="projects">
      <JackInTheBox>
        <h2 className="section-header">Projects</h2>
      </JackInTheBox>
      <div className="container">
        <Fade cascade>
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <h2>{project.title}</h2>
              <ImageContainer img={project.imgPath} />
              <p>{project.description}</p>
              <div className="button-container">
                <a
                  href={project.url}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-link"></i> Live
                </a>
                {!project.repo ? (
                  <a
                    className="btn"
                    href="www.google.com"
                    style={{ cursor: "not-allowed", pointerEvents: "none" }}
                  >
                    <i className="fas fa-exclamation-circle"></i>
                    No Repo
                  </a>
                ) : (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </StyledSection>
  );
};

export default Projects;
