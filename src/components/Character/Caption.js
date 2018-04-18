import styled from "styled-components";
import {transitions} from "polished/lib/index";

export const Caption = styled.figcaption`
    position: absolute;
    width: ${props => props.checked ? '100%' : 'auto'};
    bottom: ${props => props.checked ? '-1em' : '1em'};
    left: ${props => props.checked ? '0' : '1em'};
    text-align: center;
    background: ${props => props.theme.colors.background.base};
    color: #222;
    padding: .2em;
    box-sizing: border-box;
    border: solid ${props => props.theme.colors.foreground.base};
    border-width: 2px 2px 3px 3px;
    border-radius:4% 95% 6% 95%/95% 4% 92% 5%;
    transform: rotate(-2deg);
    ${transitions('all 200ms ease-in-out')}
`;

export default Caption;
