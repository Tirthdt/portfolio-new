import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  font-family: var(--body-font);
  margin-top: 20px;
  padding: 10px 20px;
  border: 5px solid var(--text-color);
  cursor: pointer;
  color: var(--text-color);
  border: 5px solid var(--accent-color);
  // border-radius: 3px;
  transition: all 0.2s ease-in;
  box-shadow: -3px -3px 0 var(--text-color), -4px -4px 2px var(--text-color),
    5px 5px 0 var(--text-color), 6px 6px 0px var(--accent-color);
  font-weight: bold;

  &:hover {
    box-shadow: 3px 3px 0 var(--text-color), 4px 4px 2px var(--text-color);
  }

  &:active {
    transform: scale(0.9);
  }
`;
