import styled from "styled-components";

const Card = styled.section<{ noPadding?: boolean }>`
  background: var(--card-background);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
  padding: ${(props) => (props.noPadding ? "0" : "1px 16px")};
`;

export default Card;
