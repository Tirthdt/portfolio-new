import styled from "styled-components";

export const Skill = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  border: 10px solid ${(props) => props.bg};
  text-align: center;
  transition: all 0.2s ease-in;
  border-radius: 10px;
  box-shadow: 4px 4px 0 #111;

  &:hover {
    box-shadow: 4px 4px 0 #fff;
    cursor: pointer;
  }

  &:hover .title {
    box-shadow: 4px 4px 0 #fff;
  }

  img {
    display: block;
    margin: 0 auto;
    text-align: center;
    filter: drop-shadow(2px 4px 6px ${(props) => props.bg});
  }

  .title {
    position: absolute;
    bottom: -35%;
    left: 3%;
    font-weight: bold;
    text-shadow: 2px 2px #111;
    transition: all 0.2s ease-in;
    background: ${(props) => props.bg};
    width: 100px;
    color: ${(props) => props.text};
    border-bottom-left-radius: 5px;
    box-shadow: 4px 4px 0 #111;
    border-bottom-right-radius: 5px;
  }
`;

export const ImageContainer = styled.div`
  width: 95%;
  margin: 10px auto;
  height: 350px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 4px solid #fff;
`;
