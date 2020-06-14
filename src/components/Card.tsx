import styled from "styled-components";

const Card = styled.section<{ withPadding: boolean }>`
  background: var(--card-background);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
  border: var(--card-border);
  &:empty {
    border: none;
    box-shadow: none;
  }
  padding: ${(props) => (props.withPadding ? "16px" : "0")};
`;

export default Card;
