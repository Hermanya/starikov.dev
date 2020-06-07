import React from "react";
import styled from "styled-components";
import { Title } from "../components/typography";
import ExternalLink from "components/ExternalLink";
import { NavigationLinkListItem } from "navigation";
import Space from "components/Space";

const Link = styled(ExternalLink)`
  display: block;
  text-align: left;
`;

const SubSections = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;
const SubSection = styled.div`
  min-width: 50%;
  margin-bottom: 16px;
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
      <Space />
      <section style={{ flex: 1 }}>
        <Title>Links</Title>
        <Space />
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
            <Link href="https://linkedin.com/in/hermanstarikov">LinkedIn</Link>
            <Link href="https://m.me/hermanhasawish">Messenger</Link>
            <Link href="http://t.me/hermanya">Telegram</Link>
          </SubSection>
        </SubSections>
      </section>
      <Space />
      <SubSections style={{ flex: 1 }}>
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
      <Space />
      <div style={{ flex: 1, justifySelf: "flex-end" }}>
        <NavigationLinkListItem to={"Herman"} from={"Links"}>
          starikov.dev
        </NavigationLinkListItem>
        <NavigationLinkListItem
          renderIfActive
          to={"PrivacyPolicy"}
          from={"Links"}
        >
          Privacy Policy
        </NavigationLinkListItem>
        <NavigationLinkListItem
          renderIfActive
          to={"TermsOfService"}
          from={"Links"}
        >
          Terms of Service
        </NavigationLinkListItem>
      </div>
      <Space />
    </>
  );
};

export default Links;
