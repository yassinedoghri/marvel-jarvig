import Caption from "components/Character/Caption";
import CheckBadge from "components/Character/CheckBadge";

import Figure from "components/Character/Figure";
import Image from "components/Character/Image";
import Label from "components/Character/Label";
import RadioBtn from "components/Character/RadioBtn";
import styled from "styled-components";
import { getResultColor } from "utils/style";

const Character = styled.li.attrs({
  // or we can define dynamic ones
  resultcolor: props => getResultColor(props.theme, props.result)
})`
  margin: 0 auto;
  flex: 0 0 auto;

  ${Image} {
    border-color: ${props => props.resultcolor};
    border-style: solid;
  }

  ${CheckBadge} {
    background: ${props => props.resultcolor};
    border-color: ${props => props.resultcolor};
    border-style: solid;
  }

  ${Caption} {
    border-color: ${props => props.resultcolor};
    background: ${props => props.resultcolor};
    color: ${props => props.theme.colors.contrastDark.base};
  }

  ${RadioBtn} {
    &:disabled + label > figure > img,
    &:disabled + label > figure > figcaption {
      border-color: ${props => props.resultcolor};
    }

    &:disabled + label > figure > figcaption {
      background: ${props => props.resultcolor};
    }
  }
`;

Character.Figure = Figure;
Character.Image = Image;
Character.Caption = Caption;
Character.CheckBadge = CheckBadge;
Character.RadioBtn = RadioBtn;
Character.Label = Label;

export default Character;
