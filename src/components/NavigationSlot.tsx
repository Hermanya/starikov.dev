import styled from "styled-components";
import React from "react";

const NavigationSlotContainer = styled.div`
  height: 100%;
  max-height: 100%;
  overflow: auto;
  position: absolute;
  background: var(--background);
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in;

  @media screen and (orientation: landscape) and (min-width: 600px) and (max-width: 1000px) {
    flex-direction: row;
    overflow: visible;
  }
  @media screen and (max-width: 1000px) {
    overflow: visible;
  }
`;

class NavigationSlot extends React.PureComponent<{
  prefetchData?: any;
}> {
  componentDidMount() {
    this.props.prefetchData?.();
  }

  render() {
    return <NavigationSlotContainer {...this.props} />;
  }
}

export default NavigationSlot;
