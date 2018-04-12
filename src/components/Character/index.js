import styled from "styled-components";

import Image from './Image';
import RadioBtn from './RadioBtn';

export const Character = styled.div`
    margin: 1em auto;
`;

Character.Image = Image;
Character.RadioBtn = RadioBtn;

export default Character;
