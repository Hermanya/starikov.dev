import React from "react";
import styled from "styled-components";
import { Title, Heading } from "../components/typography";
import ExternalLink from "components/ExternalLink";
import { NavigationLinkListItem } from "navigation";
import Space from "components/Space";
import { Card } from "exports";

const Link = styled(ExternalLink)`
  display: block;
  text-align: left;
`;

const Flex = styled.div`
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

const Links = () => {
  return (
    <>
      <Space />
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Title>Links</Title>
        <Space />
        <Card withPadding>
          <Heading>Contact</Heading>
          <Space />
          <Flex>
            <Link href="mailto:hermanstarikov@gmail.com">Email</Link>
            <Space />
            <Link href="https://linkedin.com/in/hermanstarikov">LinkedIn</Link>
            <Space />
            <Link href="https://m.me/hermanhasawish">Messenger</Link>
            <Space />
            <Link href="http://t.me/hermanya">Telegram</Link>
          </Flex>
        </Card>
      </section>
      <Space />
      <section style={{ flex: 1 }}>
        <Card withPadding>
          <Flex>
            <SubSection>
              <Heading>Coding</Heading>
              <Space />
              <Link href="https://github.com/hermanya">GitHub</Link>
              <Link href="https://stackoverflow.com/users/7228427/herman-starikov">
                StackOverflow
              </Link>
              <Link href="https://twitter.com/hermanhasawish">Twitter</Link>
              <Link href="https://codepen.io/Hermanya">CodePen</Link>
            </SubSection>
            <SubSection>
              <Heading>Other</Heading>
              <Space />
              <Link href="https://instagram.com/hermanya">Instagram</Link>
              <Link href="https://facebook.com/hermanhasawish">Facebook</Link>
              <Link href="https://www.producthunt.com/@hermanhasawish/made">
                Product Hunt
              </Link>
              <Link href="https://dribbble.com/hermanya">Dribbble</Link>
            </SubSection>
          </Flex>
        </Card>
      </section>
      <Space />
      <div style={{ flex: 1, justifySelf: "flex-end" }}>
        <Card withPadding={false}>
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
        </Card>
      </div>
      <Space />
    </>
  );
};

export default Links;
