import styled from "styled-components";

export const Emphasis = styled.em`
    color: ${props => {
        if (props.primary) return props.theme.colors.primary.base;
        if (props.accent) return props.theme.colors.accent.base;
        if (props.accent2) return props.theme.colors.accent2.base;
        return props.theme.colors.light.primary;
    }};
    font-family: Bangers;
`;

export default Emphasis;
