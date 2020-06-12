import React from "react";
import Avatar from "components/Avatar";
import { NavigationLinkListItem, useNextAvailableSpaceFor } from "navigation";
import { Heading, Paragraph, InteractiveText } from "components/typography";
import styled from "styled-components";
import Card from "components/Card";
import Space from "components/Space";
import ExternalLink from "components/ExternalLink";

const PageTitle = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0em;
  margin: 0;
`;

const Herman = () => {
  useNextAvailableSpaceFor("Links", { from: "Herman" });
  return (
    <>
      <Space />
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        {/* <span
          style={{
            position: "absolute",
            top: 80,
            fontSize: 100,
            opacity: 0.1,
            textAlign: "center",
          }}
        >
          Герман
        </span>
        <span
          style={{
            position: "absolute",
            top: -20,
            fontSize: 80,
            opacity: 0.1,
            textAlign: "center",
          }}
        >
          Стариков
        </span> */}

        <Avatar width={128} />
        <Space />
        <PageTitle>Herman Starikov</PageTitle>
      </section>
      <Space />
      <section style={{ flex: 1 }}>
        <Card>
          <Space />
          <Heading>Developer at Coursera</Heading>
          <Space />
          <Paragraph>
            Born and raised in Moscow. Immigrated to Toronto to study software
            development. In my spare time I make web stuff, check it out.
          </Paragraph>
          <Space />

          <ExternalLink href="mailto:hermanstarikov@gmail.com">
            <InteractiveText>Contact</InteractiveText>
          </ExternalLink>

          <Space />
        </Card>
      </section>
      <Space />
      <div style={{ flex: 1 }}>
        <NavigationLinkListItem renderIfActive to={"Links"} from={"Herman"}>
          Links
        </NavigationLinkListItem>

        <NavigationLinkListItem
          renderIfActive
          to={"ReactSlotNavigation"}
          from={"Herman"}
        >
          Slot Navigation
        </NavigationLinkListItem>

        <NavigationLinkListItem renderIfActive to={"Counter"} from={"Herman"}>
          Counter
        </NavigationLinkListItem>
      </div>
      <Space />
    </>
  );
};

export default Herman;
