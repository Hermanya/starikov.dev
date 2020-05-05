import React from "react";
import styled from "styled-components/macro";
import Avatar from "./Avatar";
import { Heading, Description } from "./typography";

const Container = styled.a`
  display: grid;
  grid-column-gap: 16px;
  grid-template:
    "pic name" auto
    "pic desc" auto / auto 1fr;
  line-height: 1;
`;

const Author = () => {
  return (
    <Container href="/">
      <Avatar width={44} css="grid-area: pic;" />
      <Heading css="grid-area: name;">Herman Starikov</Heading>
      <Description css="grid-area: desc;">Web Developer @ Coursera</Description>
    </Container>
  );
};

export default Author;
