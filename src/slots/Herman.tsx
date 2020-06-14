import React from "react";
import Avatar from "components/Avatar";
import { NavigationLinkListItem, useNextAvailableSpaceFor } from "navigation";
import { Heading, Paragraph, InteractiveText } from "components/typography";
import styled from "styled-components";
import Card from "components/Card";
import Gap from "components/Gap";
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
      <Gap />
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
        <Gap />

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
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding>
          <Heading>Developer at Coursera</Heading>
          <Gap />
          <Paragraph>
            Born and raised in Moscow. Immigrated to Toronto to study software
            development. In my spare time I make web stuff, check it out.
          </Paragraph>
          <Gap />

          <ExternalLink href="mailto:hermanstarikov@gmail.com">
            <InteractiveText>Email</InteractiveText>
          </ExternalLink>
        </Card>
      </section>
      <Gap />
      <div
        style={{
          flex: 1,
        }}
      >
        <Card withPadding={false}>
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
      <Gap />
    </>
  );
};

export default Herman;
