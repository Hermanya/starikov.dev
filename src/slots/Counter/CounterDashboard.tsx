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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;

const Label = styled.div`
  color: var(--gray);
`;

const Set = styled.div`
  font-variant-numeric: tabular-nums;
  border-radius: var(--card-border-radius);
  background: var(--background);
  padding: 4px;
  cursor: pointer;
`;

const Value = styled.div`
  font-variant-numeric: tabular-nums;
  font-size: 32px;
  color: var(--purple);
`;

const SetValue = styled.div`
  font-variant-numeric: tabular-nums;
  font-size: 32px;
  color: var(--pink);
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
              <Row>
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
              </Row>
            </Card>
            <Gap />
            <Row>
              <Card withPadding style={{ flex: 1 }}>
                <Heading>Total Reps</Heading>
                <Gap />
                <Value>
                  {todaysCounts(countRecords).reduce((a, b) => a + b, 0)}
                </Value>
              </Card>
              <Gap />
              <Card withPadding style={{ flex: 1 }}>
                <Heading>Reps to-do</Heading>
              </Card>
            </Row>
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
            <Gap />

            <Heading>All time</Heading>
            <Gap />
            <Card withPadding>
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
              <Gap />
              <Gap />

              <Row>
                <Column>
                  <Label>Avg reps/day</Label>
                  <Gap />
                  <Value>
                    {Math.round(
                      countRecordsPerDay
                        .map((day) => day.total)
                        .reduce((a, b) => a + b) / countRecordsPerDay.length
                    )}
                  </Value>
                </Column>
                <Column>
                  <Label>Max reps/set</Label>
                  <Gap />
                  <SetValue>
                    {Math.max(...countRecords.map((set) => set.count))}
                  </SetValue>
                </Column>
                <Column>
                  <Label>Max reps/day</Label>
                  <Gap />
                  <Value>
                    {Math.max(...countRecordsPerDay.map((day) => day.total))}
                  </Value>
                </Column>
              </Row>

              <Gap />
              <Gap />

              <Row>
                <Column>
                  <Label>Total Reps</Label>
                  <Gap />
                  <Value>
                    {countRecords
                      .reduce((total, record) => total + record.count, 0)
                      .toLocaleString()}
                  </Value>
                </Column>
                <Column>
                  <Label>Total Sets</Label>
                  <Gap />
                  <SetValue>{countRecords.length}</SetValue>
                </Column>
                <Column>
                  <Label>Total Days</Label>
                  <Gap />
                  <Value>{countRecordsPerDay.length}</Value>
                </Column>
              </Row>
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
  <Row>
    {counts.map((count, index) => (
      <Row key={index}>
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
      </Row>
    ))}
  </Row>
);

export default CounterDashboard;
