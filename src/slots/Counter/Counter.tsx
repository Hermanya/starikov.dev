import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem, useNextAvailableSpaceFor } from "navigation";
import Card from "components/Card";
import { InteractiveText } from "components/typography";

const Count = styled.div`
  font-size: 128px;
  opacity: 0.1;
`;

const CountCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Counter = () => {
  useNextAvailableSpaceFor("CounterChart", { from: "Counter" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const doTheThing = () => {
      try {
        localStorage.setItem(
          "counter",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("counter") ?? "[]").filter(
              (_: any) => _.count > 0
            ),
            {
              timestamp: Date.now(),
              count,
            },
          ])
        );
      } catch (e) {}
    };
    window.onunload = doTheThing;
  }, [count]);

  return (
    <>
      <CountCard
        onPointerDown={() => {
          setCount(count + 1);
        }}
        style={{
          flex: 3,
        }}
      >
        <Space />
        <Count>{count}</Count>
        <InteractiveText>
          Tap Here
          <Space />
        </InteractiveText>
      </CountCard>
      <Space />
      <div
        style={{
          flex: 1,
        }}
      >
        <NavigationLinkListItem to={"CounterChart"} from={"Counter"}>
          Counter chart
        </NavigationLinkListItem>
        <NavigationLinkListItem to={"Herman"} from={"Counter"}>
          starikov.dev
        </NavigationLinkListItem>
      </div>
    </>
  );
};

export default Counter;
