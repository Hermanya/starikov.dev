import React from "react";
import Avatar from "components/Avatar";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
import { Heading, Paragraph, InteractiveText } from "components/typography";
import styled from "styled-components";
import Card from "components/Card";
import Gap from "components/Gap";
import ExternalLink from "components/ExternalLink";
import { useAmlifyApi } from "api/amplify";
import Herman from "../images/Herman.jpg";

const PageTitle = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0em;
  margin: 0;
`;

type PersonalInfo = {
  name: string;
  title: string;
  description: string;
  ru?: PersonalInfo;
};

const Profile: React.FC<{ slotArgs: string[] }> = ({
  slotArgs: [username],
}) => {
  const [data] = useAmlifyApi(username, `PersonalInfo`);
  const personalInfo: PersonalInfo = data?.PersonalInfo;

  useNextSlotFor("Counters", {
    toArgs: [username],
    from: "Profile",
    fromArgs: [username],
  });

  if (!personalInfo) {
    return null;
  }

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
        <Avatar
          src={({ Herman } as { [key: string]: string })[username]}
          alt={username}
        />
        <Gap />

        <PageTitle>{personalInfo.name}</PageTitle>
        <div
          style={{
            color: "var(--gray2)",
            fontStyle: "italic",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          }}
        >
          {personalInfo.ru?.name}
        </div>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding>
          <Heading>{personalInfo.title}</Heading>
          <Gap />
          <Paragraph>{personalInfo.description}</Paragraph>
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
            to={"Notes"}
            toArgs={[username]}
            from={"Profile"}
            fromArgs={[username]}
          >
            Notes
          </NavigationLinkListItem>

          <NavigationLinkListItem
            renderIfActive
            to={"Links"}
            toArgs={[username]}
            from={"Profile"}
            fromArgs={[username]}
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
