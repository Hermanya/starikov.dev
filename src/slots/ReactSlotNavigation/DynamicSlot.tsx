import React from "react";
import { NavigationLinkListItem } from "navigation";
import { Card, Title, Gap } from "exports";
import { FixedLayout } from "components/FixedLayout";

const DynamicSlot: React.FC<{
  slotArgs: string[];
}> = ({ slotArgs = [] }) => {
  return (
    <FixedLayout
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"ReactSlotNavigation"}
            from={"DynamicSlot"}
            fromArgs={slotArgs}
          >
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      }
    >
      <Title>This slot is dynamic</Title>
      <Gap />
      <Card withPadding>
        Hello <strong>{slotArgs.join(", ")}</strong>
      </Card>
    </FixedLayout>
  );
};

export default DynamicSlot;
