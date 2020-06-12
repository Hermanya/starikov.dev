import React from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem } from "navigation";
import Card from "components/Card";
import { Title } from "components/typography";

const GraphCard = styled(Card)`
  display: flex;
  padding: 16px;
  align-items: flex-end;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.div`
  font-variant-numeric: tabular-nums;
  border-radius: var(--card-border-radius);
  background: var(--background);
  padding: 8px;
`;

const Day = styled.div`
  font-variant-numeric: tabular-nums;
  opacity: 0.5;
`;

const CounterChart = () => {
  const counts: { timestamp: number; count: number }[] = JSON.parse(
    localStorage.getItem("counter") ?? "[]"
  );

  const average = counts.reduce((sum, x) => sum + x.count, 0) / counts.length;

  type CountsPerDay = { date: string; counts: number[] };
  const perDay: CountsPerDay[] = counts.reduce((acc, item) => {
    const date = new Date(item.timestamp).toLocaleDateString();

    const dd = acc.find((_) => _.date === date);

    if (dd) {
      dd.counts.push(item.count);
      return acc;
    } else {
      return [...acc, { date, counts: [item.count] }];
    }
  }, [] as CountsPerDay[]);
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Counter Chart</Title>
        <Space />

        <GraphCard>
          <div>
            {perDay.reverse().map((_, index) => (
              <div key={_.date}>
                {index !== 0 && <Space />}

                <Flex>
                  <Day>{_.date}</Day>
                  <Space />
                  {_.counts.map((count) => (
                    <Flex>
                      <Count
                        style={{
                          color:
                            count > average ? "var(--green)" : "var(--gray)",
                        }}
                      >
                        {count.toString().padStart(2, "0")}
                      </Count>
                      <Space />
                    </Flex>
                  ))}
                </Flex>
              </div>
            ))}
          </div>
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
