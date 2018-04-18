import {Link} from 'react-router-dom';
import ActionBtn from './ActionBtn';

const ActionLink = ActionBtn.withComponent(Link).extend`
    text-decoration: none;
`;

export default ActionLink

