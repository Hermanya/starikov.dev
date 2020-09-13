import React from "react";
import { NavigationLinkListItem } from "navigation";
import { Code } from "components/Code";
import { Card, Title, Paragraph, Gap, ExternalLink } from "exports";

const Installation: React.FC = () => {
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Installation</Title>
        <Gap />

        <Card withPadding>
          <Paragraph>
            A good starting point is{" "}
            <ExternalLink href="https://create-react-app.dev/">
              create-react-app.dev
            </ExternalLink>
            .
          </Paragraph>
        </Card>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding>
          <Paragraph>Installing package from npm</Paragraph>
          <Code>{`npm i react-slot-navigation`}</Code>
          <Paragraph>or you can use yarn</Paragraph>
          <Code>{`yarn add react-slot-navigation`}</Code>
        </Card>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"ReactSlotNavigation"}
            from={"Installation"}
          >
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default Installation;
