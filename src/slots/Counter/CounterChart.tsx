import React from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem } from "navigation";
import Card from "components/Card";
import { Title } from "components/typography";
import { useCountRecords, CountRecord } from "./useCountRecords";

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
  cursor: pointer;
`;

const Day = styled.div`
  font-variant-numeric: tabular-nums;
  opacity: 0.5;
`;

const CounterChart = () => {
  const [countRecords, setCountRecords] = useCountRecords<CountRecord[]>([]);

  const average =
    countRecords.reduce((sum, x) => sum + x.count, 0) / countRecords.length;

  type CountsPerDay = {
    date: string;
    counts: number[];
    timestamps: number[];
    total: number;
  };
  const perDay: CountsPerDay[] = countRecords
    .reduce((days, item) => {
      const date = new Date(item.timestamp).toLocaleDateString();

      const day = days.find((_) => _.date === date);

      if (day) {
        day.counts.push(item.count);
        day.timestamps.push(item.timestamp);
        day.total += item.count;
        return days;
      } else {
        return [
          ...days,
          {
            date,
            counts: [item.count],
            timestamps: [item.timestamp],
            total: item.count,
          },
        ];
      }
    }, [] as CountsPerDay[])
    .reverse();
  const maxTotal = Math.max(...perDay.map((_) => _.total));
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Counter Chart</Title>
        <Space />
        <Card>
          <Space />
          Average {average}
          <Space />
          {perDay.length > 3 && (
            <>
              <svg
                height="100px"
                width="100%"
                viewBox={`0 0 ${perDay.length * 100} ${maxTotal * 10}`}
                className="chart"
              >
                <polyline
                  fill="none"
                  strokeLinecap="round"
                  stroke="var(--blue)"
                  strokeWidth={maxTotal / 2}
                  points={perDay
                    .map(
                      (day, index) =>
                        `${index * 100}, ${(maxTotal - day.total) * 10}`
                    )
                    .join("\n")}
                />
              </svg>
              <Space />
            </>
          )}
        </Card>
      </section>
      <Space />

      <section style={{ flex: 1 }}>
        <GraphCard>
          <div>
            {perDay.length === 0 && <div>No Entries</div>}
            {perDay.map((day, index) => (
              <div key={day.date}>
                {index !== 0 && <Space />}

                <Flex>
                  <Day>{day.date}</Day>
                  <Space />
                  {`${day.total} push-ups`}
                </Flex>
                <Space />
                <Flex>
                  {day.counts.map((count, index) => (
                    <Flex key={index}>
                      <Count
                        style={{
                          color:
                            count > average ? "var(--green)" : "var(--gray)",
                        }}
                        onClick={() => {
                          if (
                            window.confirm("Do you want to delete this record?")
                          ) {
                            setCountRecords(
                              countRecords.filter(
                                ({ timestamp }) =>
                                  timestamp !== day.timestamps[index]
                              )
                            );
                          }
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
      </section>

      <Space />
      <div
        style={{
          flex: 1,
        }}
      >
        <Card noPadding>
          <NavigationLinkListItem to={"Counter"} from={"CounterChart"}>
            Counter
          </NavigationLinkListItem>
          <NavigationLinkListItem to={"Herman"} from={"CounterChart"}>
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      </div>
    </>
  );
};

export default CounterChart;
