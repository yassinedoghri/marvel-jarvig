import styled, {keyframes} from 'styled-components';

const stretchDelay = keyframes`
    0%, 40%, 100% { 
        transform: scaleY(0.4);
    }  20% { 
        transform: scaleY(1.0);
    }
`;

export const FlexGrid = styled.div`
    margin: 100px auto;
    width: 60px;
    height: 40px;
    text-align: center;
    font-size: 10px;
    
    & > div {
        background-color: ${props => props.theme.colors.dark.secondary};
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
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
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



export default FlexGrid;
