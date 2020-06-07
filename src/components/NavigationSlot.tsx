import styled from "styled-components";

const NavigationSlot = styled.div`
  height: 100%;
  max-height: 100%;
  overflow: auto;
  position: absolute;
  background: var(--background);
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in;

  @media screen and (orientation: landscape) and (min-width: 600px) and (max-width: 1000px) {
    flex-direction: row;
  }
`;

export default NavigationSlot;
