import styled from "styled-components";

const NavigationSlot = styled.div`
  height: 100%;
  max-height: 100%;
  overflow: auto;
  position: absolute;
  background: var(--background);
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in;
`;

export default NavigationSlot;
