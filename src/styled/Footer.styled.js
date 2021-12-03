import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-logo {
    font-size: 2.1rem;
    font-weight: 500;
    color: var(--text-color);
    font-family: var(--header-font);
    letter-spacing: 5px;
    text-shadow: 5px 5px var(--accent-color);
  }

  p {
    text-align: right;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    p {
      text-align: center;
    }
  }
`;
