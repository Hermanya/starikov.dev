import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem, useNextAvailableSpaceFor } from "navigation";

const Count = styled.div`
  font-size: 128px;
  opacity: 0.4;
  font-variant-numeric: tabular-nums;
`;

const CountCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Counter = () => {
  useNextAvailableSpaceFor("CounterChart", { from: "Counter" });
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false);

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
        <Count>{count.toString().padStart(2, "0")}</Count>
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
