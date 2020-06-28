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
  todaysRecords,
  perDay,
  maxRepsPerDay,
  yesterdaysRecords,
} from "historical-data/data";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
`;

const Label = styled.div`
  color: var(--gray);
  font-size: 0.875rem;
`;

const Value = styled.div`
  font-variant-numeric: tabular-nums;
  font-size: 1rem;
  font-weight: bold;
`;

const HistoricalValue = styled(Value)`
  color: var(--purple);
`;

const Sign = styled(Value)`
  color: var(--gray);
  margin: 0 2px;
`;

const SetValue = styled(Value)`
  color: var(--pink);
`;

const CounterDashboard = () => {
  const [countRecords, setCountRecords] = useCountRecords<CountRecord[]>([]);
  const countRecordsPerDay = perDay(countRecords);
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Leg Raise Dashboard</Title>
        <Gap />

        <>
          <Day
            text="Today"
            records={todaysRecords(countRecords)}
            onSetClick={(index) => () => {
              if (window.confirm("Do you want to delete this record?")) {
                setCountRecords(
                  countRecords.filter(
                    ({ timestamp }) =>
                      timestamp !== todaysRecords(countRecords)[index].timestamp
                  )
                );
              }
            }}
          />
          <Gap />
          <Day
            text="Yesterday"
            records={yesterdaysRecords(countRecords)}
            onSetClick={(index) => () => {
              if (window.confirm("Do you want to delete this record?")) {
                setCountRecords(
                  countRecords.filter(
                    ({ timestamp }) =>
                      timestamp !==
                      yesterdaysRecords(countRecords)[index].timestamp
                  )
                );
              }
            }}
          />
        </>
      </section>
      <Gap />

      <section style={{ flex: 1 }}>
        {countRecordsPerDay.length > 2 ? (
          <>
            <Card withPadding>
              <Heading>
                All time
                <Label style={{ marginLeft: "auto" }}>
                  Since{" "}
                  {new Date(countRecords[0].timestamp).toLocaleDateString()}
                </Label>
              </Heading>
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
                  <HistoricalValue>
                    {maxRepsPerDay(countRecords)}
                  </HistoricalValue>
                </Column>
                <Column>
                  <Label>Avg Reps/Day</Label>
                  <Gap />
                  <HistoricalValue>
                    {Math.round(
                      countRecordsPerDay
                        .map((day) => day.total)
                        .reduce((a, b) => a + b) / countRecordsPerDay.length
                    )}
                  </HistoricalValue>
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
                  <Value>{countRecords.length}</Value>
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
          <NavigationLinkListItem
            to={"LegRaiseCounter"}
            from={"LegRaiseCounterDashboard"}
          >
            Counter
          </NavigationLinkListItem>
          <NavigationLinkListItem
            to={"Herman"}
            from={"LegRaiseCounterDashboard"}
          >
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      </div>
    </>
  );
};

const Day: React.FC<{
  text: string;
  records: CountRecord[];
  onSetClick: (index: number) => () => void;
}> = ({ text, records, onSetClick }) =>
  records.length === 0 ? (
    <Card withPadding>
      <>Nothing for {text}</>
    </Card>
  ) : (
    <Card withPadding>
      <Heading>{text}</Heading>
      <Gap />
      <Row>
        {records
          .map((_) => _.count)
          .map((count, index) => (
            <Row key={index}>
              {index !== 0 && <Sign>+</Sign>}
              <SetValue onClick={onSetClick(index)}>
                {count.toString().padStart(2, "0")}
              </SetValue>
            </Row>
          ))}

        <Sign>=</Sign>

        <HistoricalValue>
          {records.map((_) => _.count).reduce((a, b) => a + b)}
        </HistoricalValue>
      </Row>
    </Card>
  );

export default CounterDashboard;
