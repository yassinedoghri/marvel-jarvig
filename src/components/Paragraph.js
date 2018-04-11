import styled from "styled-components";

const Paragraph = styled.p`
    font-size:  ${props => {
        if (props.xl) return props.theme.fontSize.xl;
        if (props.lg) return props.theme.fontSize.lg;
        if (props.md) return props.theme.fontSize.md;
        if (props.sm) return props.theme.fontSize.sm;
        return props.theme.fontSize.nm;
    }};
    color: ${props => {
        if (props.light) return props.theme.colors.dark.primary;
        return props.theme.colors.light.primary;
    }};
`;

export default Paragraph;
