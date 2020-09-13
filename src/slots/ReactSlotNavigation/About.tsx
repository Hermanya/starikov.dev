import React from "react";
import { NavigationLinkListItem } from "navigation";
import { Card, Title, Paragraph, Heading, Gap } from "exports";

const About: React.FC = () => {
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>About this Library</Title>
        <Gap />
        <Heading>Built With</Heading>
        <Gap />

        <Card withPadding>
          <Paragraph>React - ui library used</Paragraph>
          <Paragraph>TypeScript - language used</Paragraph>
        </Card>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Heading>Authors</Heading>
        <Gap />
        <Card withPadding>
          <Paragraph>Herman Starikov - Initial work</Paragraph>
          <Paragraph>
            See also the list of contributors who participated in this project.
          </Paragraph>
        </Card>
        <Gap />
        <Heading>License</Heading>
        <Gap />
        <Card withPadding>
          <Paragraph>This project is licensed under the MIT License</Paragraph>
        </Card>
      </section>
      <Gap />

      <section style={{ flex: 1 }}>
        <Card withPadding={false}>
          <NavigationLinkListItem to={"ReactSlotNavigation"} from={"About"}>
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default About;
