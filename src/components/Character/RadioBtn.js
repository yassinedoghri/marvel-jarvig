import styled from "styled-components";

const RadioBtn = styled.input.attrs({
  type: "radio"
})`
  position: absolute;
  left: -9999px;

  &:checked + label > figure > img,
  &:checked + label > figure > figcaption {
    border-color: ${props => props.theme.colors.accent.base};
    transform: scale(1.1);
  }

  &:checked + label > figure > img {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &:checked + label > figure > figcaption {
    background: ${props => props.theme.colors.accent.base};
    color: ${props => props.theme.colors.contrastLight.primary};
  }

  &:checked + label > figure > img:hover {
    transform: scale(1.1) !important;
  }

  &:disabled + label > figure > img:hover {
    cursor: not-allowed;
    transform: scale(1);
  }
`;

export default RadioBtn;
