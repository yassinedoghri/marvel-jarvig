import styled, { keyframes } from "styled-components";
import media from "media";
import { tada, bounceIn, shake } from "react-animations";

import Title from "components/Card/Title";
import Ribbon from "components/Card/Ribbon";
import BodyParagraph from "components/Card/BodyParagraph";
import BodyResult from "components/Card/BodyResult";
import BodyContainer from "components/Card/BodyContainer";
import ActionBtn from "components/Card/ActionBtn";
import ActionLink from "components/Card/ActionLink";
import ActionContainer from "components/Card/ActionContainer";
import Hint from "components/Card/Hint";
import HintMessage from "components/Card/HintMessage";

const tadaAnimation = keyframes`${tada}`;
const bounceInAnimation = keyframes`${bounceIn}`;
const shakeAnimation = keyframes`${shake}`;

const Card = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.colors.background.base};
  border: solid ${props => props.theme.colors.foreground.base};
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 0.8em;
  margin: ${props => (props.alignCenter ? "0 auto" : "0")};
  margin-left: ${props => (props.alignRight ? "auto" : "0")};
  margin-bottom: 3em;
  animation: 1s
    ${props => {
      if (props.animation === "correct") return tadaAnimation;
      if (props.animation === "incorrect") return shakeAnimation;
      return bounceInAnimation;
    }};

  ${media.desktop`
        width: 15em;
        margin-left: auto;
    `} ${media.giant`
        width: 20em;
        margin-left: auto;
    `};
`;

Card.Title = Title;
Card.Ribbon = Ribbon;
Card.BodyParagraph = BodyParagraph;
Card.BodyResult = BodyResult;
Card.BodyContainer = BodyContainer;
Card.ActionBtn = ActionBtn;
Card.ActionLink = ActionLink;
Card.ActionContainer = ActionContainer;
Card.Hint = Hint;
Card.HintMessage = HintMessage;

export default Card;
