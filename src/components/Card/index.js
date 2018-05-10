import ActionBtn from "components/Card/ActionBtn";
import ActionContainer from "components/Card/ActionContainer";
import ActionLink from "components/Card/ActionLink";
import BodyContainer from "components/Card/BodyContainer";
import BodyParagraph from "components/Card/BodyParagraph";
import BodyResult from "components/Card/BodyResult";
import Hint from "components/Card/Hint";
import HintMessage from "components/Card/HintMessage";
import Ribbon from "components/Card/Ribbon";

import Title from "components/Card/Title";
import { bounceIn, shake, tada } from "react-animations";
import styled, { keyframes } from "styled-components";
import { media } from "utils";

const tadaAnimation = keyframes`${tada}`;
const bounceInAnimation = keyframes`${bounceIn}`;
const shakeAnimation = keyframes`${shake}`;

const Card = styled.div`
  position: relative;
  max-width: 30em;
  width: 100%;
  background-color: ${props => props.theme.colors.background.base};
  border: solid ${props => props.theme.colors.foreground.base};
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  padding: ${props => props.theme.spaces.md}em;
  margin: 0 auto ${props => props.theme.spaces.lg}em;
  animation: 1s
    ${props => {
      if (props.animation === "correct") return tadaAnimation;
      if (props.animation === "incorrect") return shakeAnimation;
      return bounceInAnimation;
    }};

  ${media.desktop`
      width: auto;
      margin-bottom: 0;
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
