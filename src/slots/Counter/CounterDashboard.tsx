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
  padding: 8px;
  cursor: pointer;
`;

const Day = styled.div`
  font-variant-numeric: tabular-nums;
  opacity: 0.5;
`;

const CounterDashboard = () => {
  const [countRecords, setCountRecords] = useCountRecords<CountRecord[]>([]);

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
          </Card>
        )}
      </section>
      <Gap />

      <section style={{ flex: 1 }}>
        <GraphCard withPadding>
          <div>
            {perDay.length === 0 && <div>No Records</div>}
            {perDay.length > 0 && (
              <>
                <Heading>Records</Heading> <Gap />
              </>
            )}
            {perDay.reverse().map((day, index) => (
              <div key={day.date}>
                {index !== 0 && <Gap />}

                <Flex>
                  <Day>{day.date}</Day>
                  <Gap />
                  {`${day.total} total`}
                </Flex>
                <Gap />
                <Flex>
                  {day.counts.map((count, index) => (
                    <Flex key={index}>
                      <Count
                        style={{
                          background:
                            count > average ? "var(--green)" : "var(--gray)",
                          color: "var(--gray6)",
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
                      <Gap />
                    </Flex>
                  ))}
                </Flex>
              </div>
            ))}
          </div>
        </GraphCard>
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

export default CounterDashboard;
