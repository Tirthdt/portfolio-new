import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { StyledFooter } from "./styled/Footer.styled";
import Skills from "./components/Skills";
import { GlobalStyles } from "./styled/Globals";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <StyledFooter>
        <Fade>
          <a href="#home" className="nav-logo">
            <code>{"<"}</code>Tirth<code>{"/>"} </code>
          </a>
          <p>
            Made with <i className="fas fa-heart"></i> using React and
            Styled-Components
          </p>
        </Fade>
      </StyledFooter>
    </>
  );
}

export default App;
