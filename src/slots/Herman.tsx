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
        }}
      >
        <Avatar width={250} />
        <Space />
        <PageTitle>Herman Starikov</PageTitle>
      </section>
      <Space />
      <Card style={{ flex: 1 }}>
        <Space />
        <Heading>Software Developer at Coursera</Heading>
        <Space />
        <Paragraph>
          Born and raised in Moscow, Russia. Immigrated to Canada to study
          software development. And now I live and work in Toronto. In my spare
          time I make web stuff, check it out.
        </Paragraph>
        <Space />

        <ExternalLink href="mailto:hermanstarikov@gmail.com">
          <InteractiveText>Contact</InteractiveText>
        </ExternalLink>

        <Space />
      </Card>
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
          React Slot Navigation
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
