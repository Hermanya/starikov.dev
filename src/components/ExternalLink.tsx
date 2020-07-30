import styled from "styled-components";

const ExternalLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  &:visited {
    color: var(--blue);
  }
  &:hover,
  &:focus {
    text-decoration: underline;
    outline: none;
  }
`;

export default ExternalLink;
