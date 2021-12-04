import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: ${(props) => (props.noMin ? "auto" : "100vh")};
  background: ${(props) =>
    props.secondary ? "var(--secondary-bg)" : "var(--primary-bg)"};
  border-bottom: 10px solid var(--accent-color);

  .intro {
    padding: 2rem 1.5rem;
    position: relative;
    text-align: center;

    h2 {
      font-size: 3rem;
    }

    h2,
    p {
      text-shadow: 3px 3px var(--color-dark), 4px 4px var(--accent-color);
    }

    p {
      width: 80%;
      margin: 20px auto;
      font-size: 1.6rem;
    }
  }

  .container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .card {
    position: relative;
    min-height: 675px;
    border: 10px solid var(--accent-color);
    margin: 40px 30px;
    box-shadow: 3px 3px 0 #fff, 4px 4px 0 #fff, 5px 5px 0 #fff,
      6px 6px 2px var(--accent-color), 7px 7px 0 var(--accent-color);

    h2 {
      text-align: center;
      font-family: var(--header-font);
      font-weight: bold;
      padding: 10px 0;
      letter-spacing: 3px;
      font-size: 1.7rem;
      text-shadow: 5px 5px var(--accent-color);
    }

    p {
      width: 90%;
      font-size: 1.2rem;
      margin: 10px auto;
      text-align: center;
      font-weight: bold;
      text-shadow: 3px 3px var(--color-dark), 4px 4px var(--accent-color);
    }

    .button-container {
      position: absolute;
      bottom: 2%;
      left: 5%;
      width: 90%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      justify-content: space-evenly;
    }

    .btn {
      padding: 10px 5px;
      // background: var(--accent-color);
      border: 5px solid #fff;
      width: 40%;
      text-align: center;
      box-shadow: 5px 5px 0 var(--accent-color);
      transition: all 0.2s ease-in;

      &:hover {
        transform: scale(1.1);
        border: none;
        background: var(--accent-color);
        box-shadow: 3px 3px 0 #fff;
      }
    }
  }

  .section-header {
    color: var(--text-color);
    font-size: 3rem;
    font-family: var(--header-font);
    letter-spacing: 10px;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
    text-shadow: 5px 5px var(--accent-color);
  }

  .flex {
    display: flex;
    margin-bottom: 30px;

    & > * {
      min-height: 30%;
      flex: 1;
    }

    article {
      p {
        width: 90%;
        margin: 0 auto;
        color: var(--text-color);
        text-shadow: 3px 3px var(--color-dark), 4px 4px var(--accent-color);
        font-weight: bold;
        font-size: 1.5rem;
      }
    }

    .images {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      height: 500px;
      overflow: hidden;
    }
  }

  .logos {
    display: grid;
    width: 90%;
    margin: 3rem auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    text-align: center;

    a:hover i {
      transform: scale(1.1);
      filter: drop-shadow(4px 4px 0 var(--accent-color));
    }

    i {
      font-size: 5rem;
      transition: all 0.2s ease-in;
    }
  }

  @media screen and (max-width: 768px) {
    .intro {
      p {
        width: 80%;
        font-size: 1.3rem;
      }
    }

    .section-header {
      font-size: 2rem;
    }

    .logos {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      filter: drop-shadow(4px 4px 0 var(--accent-color));
    }

    .flex {
      flex-direction: column;

      article {
        p {
          width: 70%;
          margin-bottom: 2rem;
          font-size: 1.3rem;
        }
      }

      .images {
        grid-template-columns: unset;
        grid-template-areas:
          "first second"
          "third forth"
          "fifth fifth"
          "sixth seventh"
          "eight ningth";
        gap: 20px;
        height: auto;
        width: 90%;
        margin: 20px auto;

        & > div {
          margin: 30px auto;
        }

        div.skill {
          box-shadow: 4px 4px 0 #fff;
          &.HTML {
            grid-area: first;
          }

          &.CSS {
            grid-area: second;
          }

          &.JS {
            grid-area: third;
          }

          &.NodeJS {
            grid-area: forth;
          }

          &.Angular {
            grid-area: fifth;
            margin: 0 auto;
          }

          &.React {
            grid-area: sixth;
          }

          &.Firebase {
            grid-area: seventh;
          }

          &.SCSS {
            grid-area: eight;
          }

          &.Python {
            grid-area: ningth;
          }

          img {
          }

          & .title {
            box-shadow: 4px 4px 0 #fff;
          }
        }
      }
    }

    .container {
      width: 100%;
      grid-template-columns: 1fr;
      margin: 10px auto;

      .card {
        .button-container {
          position: unset;
          flex-direction: column;
          margin: 10px auto;
          a {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;
