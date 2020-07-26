import React from "react";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
import { Heading, Title } from "components/typography";
import Card from "components/Card";
import Gap from "components/Gap";
import { useAmlifyApi } from "api/amplify";
import { camelCaseToTitleCase } from "./utils";
import { Counter, Group } from "./types";

const Counters: React.FC<{ slotArgs: string[] }> = ({
  slotArgs: [username],
}) => {
  useNextSlotFor("CounterDashboard", {
    toArgs: [username, "PushUps"],
    from: "Counters",
    fromArgs: [username],
  });
  const [response] = useAmlifyApi(username, "Counters");
  const counters: Counter[] = response?.Counters;
  if (!counters) {
    return null;
  }
  return (
    <>
      <section
        style={{
          flex: 2,
        }}
      >
        <Title>{username}'s Counters</Title>
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
                <Gap />
                <Gap />
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
                      {localStorage.login === username &&
                      counter.lastUpdatedAt &&
                      Date.now() - counter.lastUpdatedAt <
                        1000 * 60 * 60 * 4 ? (
                        <span>
                          {"☑️"}&nbsp;&nbsp;{" "}
                          {camelCaseToTitleCase(counter.name)}
                        </span>
                      ) : (
                        <span>{camelCaseToTitleCase(counter.name)}</span>
                      )}
                    </NavigationLinkListItem>
                  ))}
                </Card>
              </div>
            );
          })}
      </section>

      <Gap />

      <div
        style={{
          flex: 1,
        }}
      >
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={[username]}
            from={"Counters"}
            fromArgs={[username]}
          >
            More from Herman
          </NavigationLinkListItem>
        </Card>
      </div>
    </>
  );
};

export default Counters;
