import styled from "styled-components";

import Figure from './Figure';
import Image from './Image';
import Caption from './Caption';
import RadioBtn from './RadioBtn';

export const Character = styled.div`
    margin: 1em auto;
`;

Character.Figure = Figure;
Character.Image = Image;
Character.Caption = Caption;
Character.RadioBtn = RadioBtn;

export default Character;
