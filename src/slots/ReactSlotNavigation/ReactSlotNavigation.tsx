import React from "react";
import { ReactPackageName } from "components/ReactPackageName";
import { useNextSlotFor } from "react-slot-navigation/hooks/useNextSlotFor";
import { NavigationLinkListItem } from "navigation";
import { Card } from "exports";
import { FixedLayout } from "components/FixedLayout";

const ReactSlotNavigation: React.FC = () => {
  useNextSlotFor("Exports", { from: "ReactSlotNavigation" });
  return (
    <FixedLayout
      before={
        <ReactPackageName
          name="React slot navigation"
          description="Moving between mobile-size components across all screen sizes"
        />
      }
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem
            renderIfActive
            to={"Exports"}
            from={"ReactSlotNavigation"}
          >
            Exports
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"Installation"}
            from={"ReactSlotNavigation"}
          >
            Installation
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"About"}
            from={"ReactSlotNavigation"}
          >
            About
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"DynamicSlot"}
            toArgs={["World"]}
            from={"ReactSlotNavigation"}
          >
            Dynamic Slot
          </NavigationLinkListItem>
          <NavigationLinkListItem
            // @ts-ignore
            to={"Profile"}
            toArgs={["Herman"]}
            from={"ReactSlotNavigation"}
          >
            By starikov.dev
          </NavigationLinkListItem>
        </Card>
      }
    ></FixedLayout>
  );
};

export default ReactSlotNavigation;
