import React from "react";
import { NavigationLinkListItem } from "navigation";
import { Card, Title, Gap } from "exports";

const DynamicSlot: React.FC<{
  slotArgs: string[];
}> = ({ slotArgs = [] }) => {
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>This slot is dynamic</Title>
        <Gap />

        <Card withPadding>
          Hello <strong>{slotArgs.join(", ")}</strong>
        </Card>
      </section>
      <Gap />

      <section style={{ flex: 1 }}>
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"ReactSlotNavigation"}
            from={"DynamicSlot"}
            fromArgs={slotArgs}
          >
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default DynamicSlot;
