import styled from "styled-components";

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1;
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
  line-height: 1;
`;

export const Paragraph = styled.p`
  margin: 0;
  line-height: 1.5;
  text-align: left;
`;

export const Description = styled(Paragraph)`
  color: var(--gray);
`;

export const InteractiveText = styled.button`
  color: var(--blue);
  font-weight: 400;
  font-size: 18px;
  user-select: none;
  border: none;
  background: none;
  padding: 0;
  user-select: none;
`;
