import React from "react";
import styled from "styled-components";
import { Title, Heading } from "../components/typography";
import ExternalLink from "components/ExternalLink";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
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
      <Gap />
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Title>Links</Title>
        <Gap />
        <Card withPadding>
          <Heading>Contact</Heading>
          <Gap />
          <Flex>
            <Link href="mailto:hermanstarikov@gmail.com">Email</Link>
            <Gap />
            <Link href="https://linkedin.com/in/hermanstarikov">LinkedIn</Link>
            <Gap />
            <Link href="https://m.me/hermanhasawish">Messenger</Link>
            <Gap />
            <Link href="http://t.me/hermanya">Telegram</Link>
          </Flex>
        </Card>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding>
          <Flex>
            <SubSection>
              <Heading>Coding</Heading>
              <Gap />
              <Link href="https://github.com/hermanya">GitHub</Link>
              <Link href="https://stackoverflow.com/users/7228427/herman-starikov">
                StackOverflow
              </Link>
              <Link href="https://twitter.com/hermanhasawish">Twitter</Link>
              <Link href="https://codepen.io/Hermanya">CodePen</Link>
            </SubSection>
            <SubSection>
              <Heading>Other</Heading>
              <Gap />
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
      <Gap />
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
      <Gap />
    </>
  );
};

export default Links;
