import styled from "styled-components";

export const StyledHeader = styled.header`
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .hamburger {
    display: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--text-color);
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-item {
    margin-left: 2rem;
    text-shadow: 2px 2px var(--accent-color), 3px 3px var(--accent-color);
  }

  .nav-link {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-color);
    transition: all 0.2s ease-in;
  }

  .nav-link:hover {
    color: var(--text-color);
    cursor: pointer;
    border-bottom: 5px solid var(--accent-color);
    font-size: 1.35rem;
  }

  .nav-logo {
    font-size: 2.1rem;
    font-weight: 500;
    color: var(--text-color);
    font-family: var(--header-font);
    letter-spacing: 5px;
    text-shadow: 5px 5px var(--accent-color);
  }

  @media only screen and (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 0;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      background-color: var(--dark-color);
      width: 100%;
      height: 100vh;

      text-align: center;
      display: flex;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgb(0 0 0 / 5%);
      justify-content: center;
      align-items: center;
    }

    .nav-menu.active {
      left: 0;
      z-index: 1;
      background: #111;
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
      position: fixed;
      top: 4%;
      right: 5%;
      border: 4px solid #fff;
      padding: 5px;
      box-shadow: 3px 3px var(--accent-color);
      z-index: 10;
    }

    .hamburger.active {
      z-index: 10;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
