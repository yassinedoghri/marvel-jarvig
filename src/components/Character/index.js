import styled from "styled-components";

import Figure from "components/Character/Figure";
import Image from "components/Character/Image";
import Caption from "components/Character/Caption";
import RadioBtn from "components/Character/RadioBtn";
import CheckBadge from "components/Character/CheckBadge";

const Character = styled.div`
  margin: 1em auto;
`;

Character.Figure = Figure;
Character.Image = Image;
Character.Caption = Caption;
Character.CheckBadge = CheckBadge;
Character.RadioBtn = RadioBtn;

export default Character;
