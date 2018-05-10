import { Button } from "components";

const ActionBtn = Button.extend`
  width: ${props => (props.half ? "48%" : "100%")};
`;

export default ActionBtn;
