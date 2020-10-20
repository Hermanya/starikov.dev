import React from "react";
import { NavigationLinkListItem, SlotName } from "navigation";
import { Card, Title, Paragraph, Heading, Gap } from "exports";
import { FixedLayout } from "./FixedLayout";

const Export: React.FC<{
  name: string;
  purpose: React.ReactNode;
  typeSignature: React.ReactNode;
  slot: SlotName;
}> = ({ name, purpose, typeSignature, slot }) => {
  return (
    <FixedLayout
      before={
        <>
          <Title>
            <code>{name}</code>
          </Title>
          <Gap />
          <Heading>Purpose</Heading>
          <Gap />
          <Card withPadding>
            <Paragraph>{purpose}</Paragraph>
          </Card>
          <Gap />
        </>
      }
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem to={"Exports"} from={slot}>
            Other Exports
          </NavigationLinkListItem>
          <NavigationLinkListItem to={"ReactSlotNavigation"} from={slot}>
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      }
    >
      <Heading>Type</Heading>
      <Gap />
      <Card withPadding>
        <pre>
          <code>{typeSignature}</code>
        </pre>
      </Card>
    </FixedLayout>
  );
};

export default Export;
