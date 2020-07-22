import React from "react";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
import { Heading, Title } from "components/typography";
import Card from "components/Card";
import Gap from "components/Gap";

const Counters: React.FC<{ slotArgs: string[] }> = ({
  slotArgs: [username],
}) => {
  useNextSlotFor("CounterDashboard", {
    toArgs: [username, "PushUps"],
    from: "Counters",
    fromArgs: [username],
  });
  return (
    <>
      <section
        style={{
          flex: 1,
        }}
      >
        <Title>Counters</Title>
        <Gap />
        <Heading>Push ups</Heading>
        <Gap />
        <Card withPadding={false}>
          <NavigationLinkListItem
            renderIfActive
            to={"CounterDashboard"}
            toArgs={[username, "PushUps"]}
            from={"Counters"}
            fromArgs={[username]}
          >
            Push ups
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"CounterDashboard"}
            toArgs={[username, "DeclinePushUps"]}
            from={"Counters"}
            fromArgs={[username]}
          >
            Decline Push ups
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"CounterDashboard"}
            toArgs={[username, "DiamondPushUps"]}
            from={"Counters"}
            fromArgs={[username]}
          >
            Diamond Push ups
          </NavigationLinkListItem>
        </Card>
      </section>
      <Gap />
      <div
        style={{
          flex: 1,
        }}
      >
        <Heading>Other</Heading>
        <Gap />

        <Card withPadding={false}>
          <NavigationLinkListItem
            renderIfActive
            to={"CounterDashboard"}
            toArgs={[username, "SitUps"]}
            from={"Counters"}
            fromArgs={[username]}
          >
            Sit Ups
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"CounterDashboard"}
            toArgs={[username, "Squats"]}
            from={"Counters"}
            fromArgs={[username]}
          >
            Squats
          </NavigationLinkListItem>
        </Card>
      </div>
      <Gap />
      <div
        style={{
          flex: 1,
        }}
      >
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={["Herman"]}
            from={"Counters"}
            fromArgs={[username]}
          >
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      </div>
    </>
  );
};

export default Counters;
