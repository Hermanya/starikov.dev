import React from "react";
import styled from "styled-components";
import { Title, Heading, Description } from "../typography";
import Container from "../Container";
import image1 from "../../images/screenshots/leananalytics-compressed.jpg";
import image2 from "../../images/screenshots/ui1-compressed.jpg";
import { ExternalLink } from "react-feather";
// @ts-ignore
import lqip from "lqip.macro";
import Image from "../Image";

const placeholder1 = lqip(
  "../../images/screenshots/leananalytics-compressed.jpg"
);

const placeholder2 = lqip("../../images/screenshots/ui1-compressed.jpg");

const Project = styled.div`
  line-height: 1.5;
  /* display: flex;
	flex-direction: column;
	align-items: flex-start; */

  display: grid;
  grid-template:
    "pic" auto
    "link" auto
    "desc" auto / 1fr;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Icon = styled(ExternalLink)`
  color: var(--gray);
  transform: scale(0.5);
  /* margin-left: 0.25ch; */
`;

const PetProjects = () => {
  return (
    <Container>
      <Title>Pet Projects</Title>
      <Project>
        <Image
          placeholder={{ lqip: placeholder1 }}
          srcSet={[{ src: image1, width: 350 }]}
          alt="Lean Analytics"
          width={350}
          height={350 * 0.6862}
          css="width: 100%;"
        />
        <a href="https://leananalytics.io">
          <Heading>
            LeanAnalytics.io <Icon />
          </Heading>
        </a>
        <Description>A/B testing React apps made easy</Description>
      </Project>
      <Project>
        <Image
          placeholder={{ lqip: placeholder2 }}
          srcSet={[{ src: image2, width: 350 }]}
          alt="UI1"
          width={350}
          height={350 * 0.6862}
          css="width: 100%;"
        />
        <a href="https://ui1.io">
          <Heading>
            UI1.io <Icon />
          </Heading>
        </a>
        <Description>UI Kit Generator (Bootstrap + Sketch export)</Description>
      </Project>
    </Container>
  );
};

export default PetProjects;
