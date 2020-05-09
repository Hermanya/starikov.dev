import styled from "styled-components";

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: 0.004em;
  margin: 0;
`;

export const Heading = styled.h3`
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  text-align: left;
  line-height: 1.2;
`;

export const Paragraph = styled.p`
  margin: 0;
  line-height: 1.25;
  text-align: left;
`;

export const Description = styled(Paragraph)`
  color: var(--gray);
`;
