import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    border: solid white;
    border-width: 5px 3px 3px 5px;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    box-sizing: border-box

    &:hover {
        cursor: pointer;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    
    &:active {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`;

export default Image;
