import styled from 'styled-components';
import {keyframes} from 'styled-components'

const spinLogoAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  animation: ${spinLogoAnimation} infinite 20s linear;
  height: 80px;
`;

export const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const Intro = styled.p`
    font-size: large;
`;