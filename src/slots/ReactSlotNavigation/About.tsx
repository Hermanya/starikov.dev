import React from "react";
import { NavigationLinkListItem } from "navigation";
import { Card, Title, Paragraph, Heading, Gap } from "exports";
import { FixedLayout } from "components/FixedLayout";

const About: React.FC = () => {
  return (
    <FixedLayout
      before={
        <>
          <Title>About this Library</Title>
          <Gap />
          <Heading>Built With</Heading>
          <Gap />

          <Card withPadding>
            <Paragraph>React - ui library used</Paragraph>
            <Paragraph>TypeScript - language used</Paragraph>
          </Card>
        </>
      }
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem to={"ReactSlotNavigation"} from={"About"}>
            React Slot Navigation
          </NavigationLinkListItem>
        </Card>
      }
    >
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
    </FixedLayout>
  );
};

export default About;
