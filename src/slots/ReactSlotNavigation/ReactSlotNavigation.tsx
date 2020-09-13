import React from "react";
import { ReactPackageName } from "components/ReactPackageName";
import { useNextSlotFor } from "react-slot-navigation/hooks/useNextSlotFor";
import { NavigationLinkListItem } from "navigation";
import { Gap, Card } from "exports";

const ReactSlotNavigation: React.FC = () => {
  useNextSlotFor("Exports", { from: "ReactSlotNavigation" });
  return (
    <>
      <div style={{ flex: 1 }}>
        <ReactPackageName
          name="React slot navigation"
          description="Moving between mobile-size components across all screen sizes"
        />
      </div>
      <Gap />
      <nav style={{ flex: 1 }}>
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
      </nav>
    </>
  );
};

export default ReactSlotNavigation;
