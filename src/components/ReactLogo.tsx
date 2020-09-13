import React from "react";
import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 128px;
  width: 128px;
  pointer-events: none;
  margin: auto;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${animation} infinite 40s linear;
  }
`;

const ReactLogo = () => <Logo src={logo} alt="logo" />;
export default ReactLogo;
