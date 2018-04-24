import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";

const flashAnimation = keyframes`${flash}`;

const Label = styled.span`
  font-family: Bangers;
  letter-spacing: 0.1em;
  text-shadow: 3px 3px 0 #222, -1px -1px 0 #222, 1px -1px 0 #222,
    -1px 1px 0 #222, 1px 1px 0 #222;
  animation: ${props =>
    props.blink ? `2s ${flashAnimation} infinite` : "none"};
`;

export default Label;
