import { transitions } from "polished";

import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceInAnimation = keyframes`${bounceIn}`;

const Image = styled.img`
  width: 100%;
  border-width: 5px 3px 3px 5px;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  animation: 1s ${bounceInAnimation};
  ${transitions("all 200ms ease-in-out")};

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.05);
  }

  &:hover + figcaption {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export default Image;
