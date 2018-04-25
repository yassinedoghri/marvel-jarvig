import Paragraph from "components/Paragraph";

const Footer = Paragraph.extend`
  color: ${props => props.theme.colors.light.disabled};
  padding: 0.2em;
  font-weight: bold;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`;

export default Footer;
