import React from "react";
import { NavigationLinkListItem, SlotName } from "navigation";
import { Card, Title, Paragraph, Heading, Gap } from "exports";

const Export: React.FC<{
  name: string;
  purpose: React.ReactNode;
  typeSignature: React.ReactNode;
  slot: SlotName;
}> = ({ name, purpose, typeSignature, slot }) => {
  return (
    <>
      <section style={{ flex: 1 }}>
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
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Heading>Type</Heading>
        <Gap />
        <Card withPadding>
          <pre>
            <code>{typeSignature}</code>
          </pre>
        </Card>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding={false}>
          <NavigationLinkListItem to={"Exports"} from={slot}>
            Other Exports
          </NavigationLinkListItem>
          <NavigationLinkListItem to={"ReactSlotNavigation"} from={slot}>
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default Export;
