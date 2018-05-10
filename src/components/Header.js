import { bounceInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.spaces.xl}em;
  padding: 0 ${props => props.theme.spaces.md}em;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${props => props.theme.colors.primary.dark};
  animation: 1s ${bounceInDownAnimation};
`;

export default Header;
