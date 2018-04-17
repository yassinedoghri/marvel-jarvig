import styled from "styled-components";

export const Caption = styled.figcaption`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    text-align: center;
    background: white;
    color: #222;
    padding: .2em;
    box-sizing: border-box;
    border: solid black;
    border-width: 2px 2px 3px 3px;
    border-radius:4% 95% 6% 95%/95% 4% 92% 5%;
    transform: rotate(-2deg);
`;

export default Caption;
