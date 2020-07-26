import React from "react";
import styled from "styled-components";
import { Title, Heading } from "../components/typography";
import ExternalLink from "components/ExternalLink";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
import { Card, NavigationLinkListItem as LinkListItem } from "exports";
import { camelCaseToTitleCase } from "./Counter/utils";

const Link = styled(ExternalLink)`
  display: block;
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;
const SubSection = styled.div`
  min-width: 50%;
  margin-bottom: 16px;
  a {
    line-height: 2;
  }
`;

type linkType = {
  url: string;
  name: string;
  group: string;
};

type Group = {
  name: string;
  items: linkType[];
};

const links: linkType[] = [
  {
    url: "mailto:herman@starikov.dev",
    name: "Email",
    group: "Contact",
  },
  {
    url: "https://linkedin.com/in/hermanstarikov",
    name: "LinkedIn",
    group: "Contact",
  },
  {
    url: "https://m.me/hermanhasawish",
    name: "Messenger",
    group: "Contact",
  },
  {
    url: "http://t.me/hermanya",
    name: "Telegram",
    group: "Contact",
  },
];

const Links = () => {
  return (
    <>
      <section
        style={{
          flex: 1,
        }}
      >
        <Title>Herman's Links</Title>
        {links
          .reduce((groups, item) => {
            let group = groups.find((_) => _.name === item.group);
            if (group) {
              group.items.push(item);
              return groups;
            } else {
              group = {
                name: item.group,
                items: [item],
              };
              return groups.concat(group);
            }
          }, [] as Group[])
          .map((group) => {
            return (
              <div key={group.name}>
                <Gap />
                <Gap />
                <Heading>{camelCaseToTitleCase(group.name)}</Heading>
                <Gap />
                <Card withPadding={false}>
                  {group.items.map((link) => (
                    <LinkListItem
                      href={link.url}
                      key={link.name}
                      target="_blank"
                    >
                      {link.name}
                    </LinkListItem>
                  ))}
                </Card>
              </div>
            );
          })}
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding>
          <Flex>
            <SubSection>
              <Heading>Coding</Heading>
              <Gap />
              <Link href="https://github.com/hermanya">GitHub</Link>
              <Link href="https://stackoverflow.com/users/7228427/herman-starikov">
                StackOverflow
              </Link>
              <Link href="https://twitter.com/hermanhasawish">Twitter</Link>
              <Link href="https://codepen.io/Hermanya">CodePen</Link>
            </SubSection>
            <SubSection>
              <Heading>Other</Heading>
              <Gap />
              <Link href="https://instagram.com/hermanya">Instagram</Link>
              <Link href="https://facebook.com/hermanhasawish">Facebook</Link>
              <Link href="https://www.producthunt.com/@hermanhasawish/made">
                Product Hunt
              </Link>
              <Link href="https://dribbble.com/hermanya">Dribbble</Link>
            </SubSection>
          </Flex>
        </Card>
      </section>
      <Gap />
      <div style={{ flex: 1, justifySelf: "flex-end" }}>
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={["Herman"]}
            from={"Links"}
          >
            More from Herman
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"PrivacyPolicy"}
            from={"Links"}
          >
            Privacy Policy
          </NavigationLinkListItem>
          <NavigationLinkListItem
            renderIfActive
            to={"TermsOfService"}
            from={"Links"}
          >
            Terms of Service
          </NavigationLinkListItem>
        </Card>
      </div>
    </>
  );
};

export default Links;
