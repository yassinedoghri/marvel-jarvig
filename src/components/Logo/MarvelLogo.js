import styled from "styled-components";

const MarvelLogo = styled.img`
  height: ${props => (props.sm ? "2em" : "4.5em")};
`;

export default MarvelLogo;
