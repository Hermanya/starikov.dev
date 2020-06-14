import React, { useState } from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem, useNextAvailableSpaceFor } from "navigation";
import { InteractiveText } from "components/typography";
import Card from "components/Card";
import { useCountRecords, CountRecord } from "./useCountRecords";

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

const Counter = () => {
  useNextAvailableSpaceFor("CounterDashboard", { from: "Counter" });
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false);
  const [countRecords, setCountRecords] = useCountRecords<CountRecord[]>([]);

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
        }}
      >
        <Space />
        <Count
          style={{
            transition: "0.25s",
            color: isGreen ? "var(--green)" : "var(--blue)",
          }}
        >
          {count.toString().padStart(2, "0")}
        </Count>
        <div>
          {count ? (
            <InteractiveText
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const countRecord: CountRecord = {
                  timestamp: Date.now(),
                  count: count - 1,
                };
                setCountRecords([...countRecords, countRecord]);
                setCount(0);
              }}
            >
              Save
            </InteractiveText>
          ) : (
            <InteractiveText>Start tapping</InteractiveText>
          )}
          <Space />
        </div>
      </CountCard>
      <Space />
      <section
        style={{
          flex: 1,
        }}
      >
        <Card noPadding>
          <NavigationLinkListItem to={"CounterDashboard"} from={"Counter"}>
            Counter dashboard
          </NavigationLinkListItem>
          <NavigationLinkListItem to={"Herman"} from={"Counter"}>
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default Counter;
