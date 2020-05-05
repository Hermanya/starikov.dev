import React from "react";
import styled from "styled-components";
import { Title } from "../components/typography";
import ExternalLink from "components/ExternalLink";
import { NavigationLinkListItem } from "navigation";

const Link = styled(ExternalLink)`
  display: block;
  text-align: left;
`;

const SubSections = styled.div`
  display: grid;
  grid-template:
    "1 2" auto
    "3 4" auto / 1fr 1fr;
  grid-gap: 2em;
`;
const SubSection = styled.div`
  a {
    line-height: 2;
  }
`;

const Label = styled.div`
  line-height: 2;
  font-weight: 400;
  color: var(--gray);
`;

const Links = () => {
  return (
    <>
      <Title>Links</Title>
      <SubSections>
        <SubSection>
          <Label>Programming</Label>
          <Link href="https://github.com/hermanya">GitHub</Link>
          <Link href="https://stackoverflow.com/users/7228427/herman-starikov">
            Stack Overflow
          </Link>
          <Link href="https://twitter.com/hermanhasawish">Twitter</Link>
          <Link href="https://codepen.io/Hermanya">CodePen</Link>
        </SubSection>
        <SubSection>
          <Label>Contact</Label>
          <Link href="mailto:hermanstarikov@gmail.com">Email</Link>
          <Link href="https://m.me/hermanhasawish">Messenger</Link>
          <Link href="http://t.me/hermanya">Telegram</Link>
        </SubSection>
        <SubSection>
          <Label>For Hire</Label>
          <Link href="https://linkedin.com/in/hermanstarikov">LinkedIn</Link>
          <Link href="https://starikov.dev/resume">Resume</Link>
        </SubSection>
        <SubSection>
          <Label>Other</Label>
          <Link href="https://instagram.com/hermanya">Instagram</Link>
          <Link href="https://facebook.com/hermanhasawish">Facebook</Link>
          <Link href="https://www.producthunt.com/@hermanhasawish/made">
            Product Hunt
          </Link>
          <Link href="https://dribbble.com/hermanya">Dribbble</Link>
          <Link href="https://angel.co/hermanya">Angel</Link>
        </SubSection>
      </SubSections>
      <div style={{ margin: "auto 0 16px" }}>
        <NavigationLinkListItem renderIfActive to={"Herman"} from={"Links"}>
          starikov.dev
        </NavigationLinkListItem>
      </div>
    </>
  );
};

export default Links;
