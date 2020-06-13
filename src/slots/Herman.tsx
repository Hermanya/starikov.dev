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
          justifyContent: "center",
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
        <PageTitle
          as="div"
          style={{
            opacity: 0.25,
            fontSize: "1rem",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          }}
        >
          Стариков Герман Владимирович
        </PageTitle>
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
            <InteractiveText className="CardAction">Email</InteractiveText>
          </ExternalLink>

          <Space />
        </Card>
      </section>
      <Space />
      <div
        style={{
          flex: 1,
        }}
      >
        <Card noPadding>
          <NavigationLinkListItem renderIfActive to={"Links"} from={"Herman"}>
            Links
          </NavigationLinkListItem>

          {/* <NavigationLinkListItem
            renderIfActive
            to={"ReactSlotNavigation"}
            from={"Herman"}
          >
            Slot Navigation
          </NavigationLinkListItem> */}

          <NavigationLinkListItem renderIfActive to={"Counter"} from={"Herman"}>
            Counter
          </NavigationLinkListItem>
        </Card>
      </div>
      <Space />
    </>
  );
};

export default Herman;
