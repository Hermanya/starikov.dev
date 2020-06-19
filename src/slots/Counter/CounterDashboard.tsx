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
  average,
  todaysRecords,
  todaysTotal,
  todaysCounts,
  perDay,
  maxRepsPerDay,
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

const OtherValue = styled.div`
  font-variant-numeric: tabular-nums;
  font-size: 32px;
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
              <Heading>Sets of Reps</Heading>
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
                <Value>{todaysTotal(countRecords)}</Value>
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
                  <Label>Max Reps/Set</Label>
                  <Gap />
                  <SetValue>
                    {Math.max(...countRecords.map((set) => set.count))}
                  </SetValue>
                </Column>
                <Column>
                  <Label>Max Reps/Day</Label>
                  <Gap />
                  <Value>{maxRepsPerDay(countRecords)}</Value>
                </Column>
                <Column>
                  <Label>Avg Reps/Day</Label>
                  <Gap />
                  <Value>
                    {Math.round(
                      countRecordsPerDay
                        .map((day) => day.total)
                        .reduce((a, b) => a + b) / countRecordsPerDay.length
                    )}
                  </Value>
                </Column>
              </Row>

              <Gap />
              <Gap />

              <Row>
                <Column>
                  <Label>Total Reps</Label>
                  <Gap />
                  <OtherValue>
                    {countRecords
                      .reduce((total, record) => total + record.count, 0)
                      .toLocaleString()}
                  </OtherValue>
                </Column>
                <Column>
                  <Label>Total Sets</Label>
                  <Gap />
                  <OtherValue>{countRecords.length}</OtherValue>
                </Column>
                <Column>
                  <Label>Total Days</Label>
                  <Gap />
                  <OtherValue>{countRecordsPerDay.length}</OtherValue>
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
        <SetValue onClick={onCountClick(index)}>
          {count.toString().padStart(2, "0")}
        </SetValue>
        <Gap />
      </Row>
    ))}
  </Row>
);

export default CounterDashboard;
