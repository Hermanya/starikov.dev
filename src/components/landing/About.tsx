import React from "react";
import styled from "styled-components/macro";
import { PageTitle, Description, Heading } from "../typography";
import Container from "../Container";
import Avatar from "../Avatar";

const AboutContainer = styled(Container)`
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: radial-gradient(
    100% at top left,
    var(--gray5),
    var(--background)
  );
  height: 100%;
`;

const About = () => {
  return (
    <AboutContainer>
      <Avatar width={250} css="margin-bottom: 1rem;" />
      <PageTitle as="h1">Herman Starikov</PageTitle>
      <Heading>
        Software Developer @&nbsp;<a href="https://coursera.org">Coursera</a>
      </Heading>
      <hr />
      <Description>
        I was bord and raised in Moscow, Russia. Then I moved to Canada to
        study. And now I live and work in Toronto. After work I watch a lot of
        Netflix with my girlfriend and I read (and retweet) a lot about React,
        JavaScript, TypeScript, Web, or Programming in general. In my spare time
        I make stuff, check it out.
      </Description>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
        <path
          fill="var(--green)"
          fill-opacity="1"
          d="M 0,0   C 0,0, 1,2, 2,0   L 2,2   C 2,2, 1,0, 0,2    L0,0 Z"
        ></path>
      </svg> */}
    </AboutContainer>
  );
};

export default About;
