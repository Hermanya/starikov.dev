import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 0.5;
`;

const Loading = () => <Container>Loading</Container>;

export default Loading;
