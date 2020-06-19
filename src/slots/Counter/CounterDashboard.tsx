import React from "react";
import styled from "styled-components";
import Gap from "components/Gap";
import { NavigationLinkListItem } from "navigation";
import Card from "components/Card";
import { Title, Heading } from "components/typography";
import { useCountRecords, CountRecord } from "./useCountRecords";
// @ts-ignore
import Trend from "react-trend";
import {
  todaysCounts,
  average,
  todaysRecords,
  perDay,
} from "historical-data/data";

const Flex = styled.div`
  display: flex;
`;

const Set = styled.div`
  font-variant-numeric: tabular-nums;
  border-radius: var(--card-border-radius);
  background: var(--background);
  padding: 4px;
  cursor: pointer;
`;

const Indicator = styled.div`
  font-variant-numeric: tabular-nums;
  font-size: 32px;
  color: var(--purple);
`;

const CounterDashboard = () => {
  const [countRecords, setCountRecords] = useCountRecords<CountRecord[]>([]);
  const countRecordsPerDay = perDay(countRecords);
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Dashboard</Title>
        <Gap />

        {todaysCounts(countRecords).length ? (
          <>
            <Heading>Today</Heading>
            <Gap />
            <Card withPadding>
              <Heading>Sets</Heading>
              <Gap />
              <Flex>
                <Sets
                  counts={todaysCounts(countRecords)}
                  average={average(countRecords)}
                  onCountClick={(index) => () => {
                    if (window.confirm("Do you want to delete this record?")) {
                      setCountRecords(
                        countRecords.filter(
                          ({ timestamp }) =>
                            timestamp !==
                            todaysRecords(countRecords)[index].timestamp
                        )
                      );
                    }
                  }}
                />
              </Flex>
            </Card>
            <Gap />
            <Flex>
              <Card withPadding style={{ flex: 1 }}>
                <Heading>Total Reps</Heading>
                <Gap />
                <Indicator>
                  {todaysCounts(countRecords).reduce((a, b) => a + b, 0)}
                </Indicator>
              </Card>
              <Gap />
              <Card withPadding style={{ flex: 1 }}>
                <Heading>Reps to-do</Heading>
              </Card>
            </Flex>
          </>
        ) : (
          <>
            <Heading>No Records from Today</Heading>
          </>
        )}
      </section>
      <Gap />

      <section style={{ flex: 1 }}>
        {countRecordsPerDay.length > 2 ? (
          <>
            <Heading>All time</Heading>
            <Gap />
            <Card withPadding>
              <Gap />

              <Trend
                smooth
                autoDraw
                autoDrawDuration={500}
                autoDrawEasing="ease-out"
                data={countRecordsPerDay.map((_) => _.total)}
                gradient={["var(--purple)"]}
                radius={10}
                strokeWidth={2}
                strokeLinecap={"round"}
              />

              <div>
                Rep Total:{" "}
                {countRecords
                  .reduce((total, record) => total + record.count, 0)
                  .toLocaleString()}
              </div>
              <div>Set Total: {countRecords.length}</div>
              <div>Day Total: {countRecordsPerDay.length}</div>
              <div>
                Average reps/day:{" "}
                {Math.round(
                  countRecordsPerDay
                    .map((day) => day.total)
                    .reduce((a, b) => a + b) / countRecordsPerDay.length
                )}
              </div>
              <div>
                Max reps/set:{" "}
                {Math.max(...countRecords.map((set) => set.count))}
              </div>
              <div>
                Max reps/day:{" "}
                {Math.max(...countRecordsPerDay.map((day) => day.total))}
              </div>
            </Card>
          </>
        ) : (
          <>
            <Heading>No Historical Records</Heading>
          </>
        )}
      </section>

      <Gap />
      <div
        style={{
          flex: 1,
        }}
      >
        <Card withPadding={false}>
          <NavigationLinkListItem to={"Counter"} from={"CounterDashboard"}>
            Counter
          </NavigationLinkListItem>
          <NavigationLinkListItem to={"Herman"} from={"CounterDashboard"}>
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      </div>
    </>
  );
};

const Sets: React.FC<{
  counts: number[];
  onCountClick: (index: number) => () => void;
  average: number;
}> = ({ counts, average, onCountClick }) => (
  <Flex>
    {counts.map((count, index) => (
      <Flex key={index}>
        <Set
          style={{
            background: "var(--pink)",
            color: "var(--gray6)",
          }}
          onClick={onCountClick(index)}
        >
          {count.toString().padStart(2, "0")}
        </Set>
        <Gap />
      </Flex>
    ))}
  </Flex>
);

export default CounterDashboard;
