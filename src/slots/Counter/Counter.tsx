import React, { useState } from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem, useNextAvailableSpaceFor } from "navigation";
import { InteractiveText } from "components/typography";

const Count = styled.div`
  font-size: 128px;
  opacity: 0.4;
  font-variant-numeric: tabular-nums;
  user-select: none;
`;

const CountCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const doTheThing = (count: number) => {
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

const Counter = () => {
  useNextAvailableSpaceFor("CounterChart", { from: "Counter" });
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false);

  return (
    <>
      <CountCard
        onPointerDown={() => {
          setCount(count + 1);
          setIsGreen(true);
          window.setTimeout(() => {
            setIsGreen(false);
          }, 250);
        }}
        style={{
          flex: 3,
          transition: "0.25s",
          color: isGreen ? "var(--green)" : "var(--blue)",
        }}
      >
        <Space />
        <Count>{count.toString().padStart(2, "0")}</Count>
        {count ? (
          <InteractiveText
            onClick={() => {
              doTheThing(count);
              setCount(0);
            }}
          >
            Save
          </InteractiveText>
        ) : (
          <Space />
        )}
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
