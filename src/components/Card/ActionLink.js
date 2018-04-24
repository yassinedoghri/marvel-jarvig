import { Link } from "react-router-dom";
import ActionBtn from "components/Card/ActionBtn";

const ActionLink = ActionBtn.withComponent(Link).extend`
    text-decoration: none;
`;

export default ActionLink;
