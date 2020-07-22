import React from "react";
import Avatar from "components/Avatar";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
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

const Profile: React.FC<{ slotArgs: string[] }> = ({
  slotArgs: [username],
}) => {
  useNextSlotFor("Counters", {
    toArgs: [username],
    from: "Profile",
    fromArgs: [username],
  });
  return (
    <>
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
        <Avatar width={128} />
        <Gap />

        <PageTitle>{username} Starikov</PageTitle>
        <div
          style={{
            color: "var(--gray4)",
            fontStyle: "italic",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          }}
        >
          Стариков Герман Владимирович
        </div>
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
          <NavigationLinkListItem
            renderIfActive
            to={"Counters"}
            toArgs={[username]}
            from={"Profile"}
            fromArgs={[username]}
          >
            Counters
          </NavigationLinkListItem>

          <NavigationLinkListItem
            renderIfActive
            to={"Links"}
            from={"Profile"}
            fromArgs={["Herman"]}
          >
            Links
          </NavigationLinkListItem>

          <NavigationLinkListItem
            renderIfActive
            to={"ReactSlotNavigation"}
            from={"Profile"}
            fromArgs={[username]}
          >
            Slot Navigation
          </NavigationLinkListItem>
        </Card>
      </div>
    </>
  );
};

export default Profile;
