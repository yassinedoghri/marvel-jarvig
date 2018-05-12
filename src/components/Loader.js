import React from "react";
import styled, { keyframes } from "styled-components";

const stretchDelay = keyframes`
    0%, 40%, 100% { transform: scaleY(0.4); }
    20% { transform: scaleY(1.0); }
`;

const LoaderContainer = styled.div`
  margin: -5em auto 0;
  width: 60px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  & > div {
    background-color: ${props => props.theme.colors.contrastDark.secondary};
    height: 100%;
    margin: 1px;
    width: 6px;
    display: inline-block;
    animation: ${stretchDelay} 1.2s infinite ease-in-out;
  }

  & .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  & .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  & .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  & .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`;

class Loader extends React.Component {
  render() {
    return (
      <LoaderContainer>
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </LoaderContainer>
    );
  }
}

export default Loader;
