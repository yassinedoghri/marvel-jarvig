import { Button } from "components";
import media from "media";

const ActionBtn = Button.extend`
  font-family: Bangers;
  padding: 0.5em 1em;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 1rem;
  box-sizing: border-box;
  width: ${props => (props.half ? "48%" : "100%")};

  ${media.desktop`
        width: 100%;
        &:first-child {
            margin-bottom: .5em;
        }
    `} ${media.giant`
        width: ${props => (props.half ? "48%" : "100%")};
        &:first-child {
            margin-bottom: 0;
        }
    `};
`;

export default ActionBtn;
