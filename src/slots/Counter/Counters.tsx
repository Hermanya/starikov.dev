import React from "react";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
import { Heading, Title } from "components/typography";
import Card from "components/Card";
import Gap from "components/Gap";
import { useAmlifyApi } from "api/amplify";
import { camelCaseToTitleCase } from "./utils";
import { Counter, Group } from "./types";
import { FixedLayout } from "components/FixedLayout";

const Counters: React.FC<{ slotArgs: string[] }> = ({
  slotArgs: [username],
}) => {
  useNextSlotFor("CounterDashboard", {
    toArgs: [username, "PushUps"],
    from: "Counters",
    fromArgs: [username],
  });
  const [data] = useAmlifyApi(username, "Counters");
  const counters: Counter[] = data?.Counters;

  return (
    <FixedLayout
      before={<Title>{username}'s Counters</Title>}
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"FitnessLog"}
            toArgs={[username]}
            from={"Counters"}
            fromArgs={[username]}
          >
            Fitness Log
          </NavigationLinkListItem>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={[username]}
            from={"Counters"}
            fromArgs={[username]}
          >
            More from Herman
          </NavigationLinkListItem>
        </Card>
      }
    >
      {counters
        .reduce((groups, counter) => {
          let group = groups.find((_) => _.name === counter.group);
          if (group) {
            group.counters.push(counter);
            return groups;
          } else {
            group = {
              name: counter.group,
              counters: [counter],
            };
            return groups.concat(group);
          }
        }, [] as Group[])
        .map((group) => {
          return (
            <div key={group.name}>
              <Heading>{camelCaseToTitleCase(group.name)}</Heading>
              <Gap />
              <Card withPadding={false}>
                {group.counters.map((counter) => (
                  <NavigationLinkListItem
                    renderIfActive
                    key={counter.name}
                    to={"CounterDashboard"}
                    toArgs={[username, counter.name]}
                    from={"Counters"}
                    fromArgs={[username]}
                  >
                    {localStorage.Login === username &&
                    counter.lastUpdatedAt &&
                    Date.now() - counter.lastUpdatedAt < 1000 * 60 * 60 * 3 ? (
                      <span>
                        {"☑️"}&nbsp;&nbsp; {camelCaseToTitleCase(counter.name)}
                      </span>
                    ) : (
                      <span>{camelCaseToTitleCase(counter.name)}</span>
                    )}
                  </NavigationLinkListItem>
                ))}
              </Card>
              <Gap />
              <Gap />
            </div>
          );
        })}
    </FixedLayout>
  );
};

export default Counters;
