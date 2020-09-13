import React from "react";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
import { Title, Heading, Card, Gap } from "exports";

const Exports: React.FC = () => {
  useNextSlotFor("NavigationProvider", { from: "Exports" });
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Exports</Title>
        <Gap />
        <Gap />
        <Heading>Components</Heading>
        <Gap />
        <Card withPadding={false}>
          <NavigationLinkListItem
            renderIfActive
            to={"NavigationProvider"}
            from={"Exports"}
          >
            <code>NavigationProvider</code>
          </NavigationLinkListItem>
          <NavigationLinkListItem renderIfActive to={"Link"} from={"Exports"}>
            <code>Link</code>
          </NavigationLinkListItem>
        </Card>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Heading>Hooks</Heading>
        <Gap />
        <Card withPadding={false}>
          <NavigationLinkListItem
            renderIfActive
            to={"useNextSlotFor"}
            from={"Exports"}
          >
            <code>useNextSlotFor</code>
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"useNavigationState"}
            from={"Exports"}
          >
            <code>useNavigationState</code>
          </NavigationLinkListItem>
        </Card>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding={false}>
          <NavigationLinkListItem to={"ReactSlotNavigation"} from="Exports">
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default Exports;
