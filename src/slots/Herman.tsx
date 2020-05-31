import React from "react";
import Avatar from "components/Avatar";
import { NavigationLinkListItem } from "navigation";
import ExternalLink from "components/ExternalLink";
import { Heading, Paragraph } from "components/typography";
import styled from "styled-components";
import Card from "components/Card";

const PageTitle = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: 0em;
  margin: 0;
`;

const Herman = () => {
  return (
    <>
      <Avatar
        width={250}
        style={{
          margin: "16px auto 0",
        }}
      />
      <PageTitle
        style={{
          margin: "16px auto 24px",
        }}
      >
        Herman Starikov
      </PageTitle>
      <Card style={{ padding: "16px", marginBottom: 16 }}>
        <Heading style={{ margin: "0 0 8px" }}>
          Software Developer at&nbsp;
          <ExternalLink href="https://coursera.org">Coursera</ExternalLink>
        </Heading>
        <Paragraph>
          I was born and raised in Moscow, Russia. Immigrated to Canada to
          study. And now I live and work in Toronto. After work I watch a lot of
          Netflix with my girlfriend and I read (and retweet) a lot about React,
          JavaScript, TypeScript, Web, or Programming in general. In my spare
          time I make stuff, check it out.
        </Paragraph>
      </Card>

      <div style={{ margin: "auto 0 16px" }}>
        <NavigationLinkListItem renderIfActive to={"Links"} from={"Herman"}>
          Find me on the web
        </NavigationLinkListItem>

        <NavigationLinkListItem
          renderIfActive
          to={"ReactSlotNavigation"}
          from={"Herman"}
        >
          React Slot Navigation
        </NavigationLinkListItem>
        <NavigationLinkListItem
          renderIfActive
          to={"PrivacyPolicy"}
          from={"Herman"}
        >
          Privacy Policy
        </NavigationLinkListItem>
        <NavigationLinkListItem
          renderIfActive
          to={"TermsOfService"}
          from={"Herman"}
        >
          Terms of Service
        </NavigationLinkListItem>
      </div>
    </>
  );
};

export default Herman;
