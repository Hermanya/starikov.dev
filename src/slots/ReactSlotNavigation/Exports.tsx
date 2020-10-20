import React from "react";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
import { Title, Heading, Card, Gap } from "exports";
import { FixedLayout } from "components/FixedLayout";

const Exports: React.FC = () => {
  useNextSlotFor("NavigationProvider", { from: "Exports" });
  return (
    <FixedLayout
      before={
        <>
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
        </>
      }
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem to={"ReactSlotNavigation"} from="Exports">
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      }
    >
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
    </FixedLayout>
  );
};

export default Exports;
