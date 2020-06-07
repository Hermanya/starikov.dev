import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem } from "navigation";
import Card from "components/Card";
import { Title } from "components/typography";

const Bar = styled.div`
  width: 10px;
`;

const GraphCard = styled(Card)`
  display: flex;
  padding: 16px;
  align-items: flex-end;
`;

const CounterChart = () => {
  const counts: { timestamp: number; count: number }[] = JSON.parse(
    localStorage.getItem("counter") ?? "[]"
  );
  const now = Date.now();
  const timespan = Date.now() - counts[0].timestamp;
  const average = counts.reduce((sum, x) => sum + x.count, 0) / counts.length;
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Counter Chart</Title>
        <Space />

        <GraphCard>
          {counts.map(({ count, timestamp }, index, all) => {
            return (
              <Bar
                style={{
                  height: count * 10,
                  background: count > average ? "var(--green)" : "var(--red)",
                }}
                title={String(count)}
              />
            );
          })}
        </GraphCard>
        <Space />
        <Card>
          <Space />
          Average {average}
          <Space />
        </Card>
      </section>
      <Space />
      <div
        style={{
          flex: 1,
        }}
      >
        <NavigationLinkListItem to={"Counter"} from={"CounterChart"}>
          Counter
        </NavigationLinkListItem>
        <NavigationLinkListItem to={"Herman"} from={"CounterChart"}>
          starikov.dev
        </NavigationLinkListItem>
      </div>
    </>
  );
};

export default CounterChart;
