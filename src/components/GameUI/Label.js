import { flash } from "react-animations";
import styled, { keyframes } from "styled-components";

const flashAnimation = keyframes`${flash}`;

const Label = styled.span`
  font-family: Bangers, sans-serif;
  letter-spacing: 0.1em;
  text-shadow: 3px 3px 0 #222, -1px -1px 0 #222, 1px -1px 0 #222,
    -1px 1px 0 #222, 1px 1px 0 #222;
  animation: ${props =>
    props.blink ? `2s ${flashAnimation} infinite` : "none"};
`;

export default Label;
