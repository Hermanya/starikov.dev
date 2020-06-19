import React from "react";
import styled from "styled-components";
import Gap from "components/Gap";
import { NavigationLinkListItem } from "navigation";
import Card from "components/Card";
import { Title, Heading } from "components/typography";
import { useCountRecords, CountRecord } from "./useCountRecords";
// @ts-ignore
import Trend from "react-trend";

const GraphCard = styled(Card)`
  display: flex;
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
  padding: 4px;
  cursor: pointer;
`;

const Day = styled.div`
  font-variant-numeric: tabular-nums;
  opacity: 0.5;
`;

const CounterDashboard = () => {
  const [countRecords, setCountRecords] = useCountRecords<CountRecord[]>([]);

  const todaysRecords = countRecords.filter(
    (_) =>
      new Date(_.timestamp).toLocaleDateString() ===
      new Date(Date.now()).toLocaleDateString()
  );
  const todaysCounts = todaysRecords.map((_) => _.count);

  const x = 1000 * 60 * 60 * 24;

  const daysSinceBeginning = new Array(
    Math.floor((Date.now() - countRecords[0].timestamp) / x)
  )
    .fill(1)
    .map((_, index) => new Date(Date.now() - x * index).toLocaleDateString());

  const average =
    countRecords.reduce((sum, x) => sum + x.count, 0) / countRecords.length;

  type CountsPerDay = {
    date: string;
    counts: number[];
    timestamps: number[];
    total: number;
  };
  const perDay: CountsPerDay[] = countRecords.reduce((days, item) => {
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
  }, [] as CountsPerDay[]);
  // const maxTotal = Math.max(...perDay.map((_) => _.total));
  return (
    <>
      <section style={{ flex: 1 }}>
        <Title>Dashboard</Title>
        <Gap />

        <Card withPadding>
          <Heading>Today</Heading>

          <div>Sets</div>
          <Gap />
          <Counts
            counts={todaysCounts}
            average={average}
            onCountClick={(index) => () => {
              if (window.confirm("Do you want to delete this record?")) {
                setCountRecords(
                  countRecords.filter(
                    ({ timestamp }) =>
                      timestamp !== todaysRecords[index].timestamp
                  )
                );
              }
            }}
          />
          <Gap />
          <div>Reps/Set target for today: {Math.round(average + 1)}</div>
          <div>Total reps today: {todaysCounts.reduce((a, b) => a + b, 0)}</div>
          <div>Current streak:</div>
        </Card>
      </section>
      <Gap />

      <section style={{ flex: 1 }}>
        {perDay.length > 2 && (
          <Card withPadding>
            <Heading>All time trend</Heading>
            <Gap />

            <Trend
              smooth
              autoDraw
              autoDrawDuration={500}
              autoDrawEasing="ease-out"
              data={perDay.map((_) => _.total)}
              gradient={["var(--cyan)", "var(--green)"]}
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
            <div>Day Total: {perDay.length}</div>
            <div>
              Average reps/day:{" "}
              {Math.round(
                perDay.map((day) => day.total).reduce((a, b) => a + b) /
                  perDay.length
              )}
            </div>
            <div>
              Max reps/set: {Math.max(...countRecords.map((set) => set.count))}
            </div>
            <div>
              Max reps/day: {Math.max(...perDay.map((day) => day.total))}
            </div>
          </Card>
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

const Counts: React.FC<{
  counts: number[];
  onCountClick: (index: number) => () => void;
  average: number;
}> = ({ counts, average, onCountClick }) => (
  <>
    {counts.map((count, index) => (
      <Flex key={index}>
        <Count
          style={{
            background: count > average ? "var(--green)" : "var(--gray)",
            color: "var(--gray6)",
          }}
          onClick={onCountClick(index)}
        >
          {count.toString().padStart(2, "0")}
        </Count>
        <Gap />
      </Flex>
    ))}
  </>
);

// const Records = ({ perDay }) => (
//   <div>
//     {perDay.length === 0 && <div>No Records</div>}
//     {perDay.length > 0 && (
//       <>
//         <Heading>Records</Heading> <Gap />
//       </>
//     )}
//     {perDay.reverse().map((day, index) => (
//       <div key={day.date}>
//         {index !== 0 && <Gap />}

//         <Flex>
//           <Day>{day.date}</Day>
//           <Gap />
//           {`${day.total} total`}
//         </Flex>
//         <Gap />
//         <Flex>
//
//         </Flex>
//       </div>
//     ))}
//   </div>
// );

export default CounterDashboard;
