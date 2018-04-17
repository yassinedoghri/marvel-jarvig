import styled from 'styled-components';
import {radialGradient} from 'polished';

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    position: relative;
    ${props => radialGradient({
        colorStops: [props.theme.colors.accent.base + ' 0%', props.theme.colors.primary.base + ' 80%'],
    })}
`;

export default FlexWrapper;
