import React from "react";
import { NavigationLinkListItem } from "navigation";
import { Heading, Title } from "components/typography";
import Card from "components/Card";
import Gap from "components/Gap";
import { useAmlifyApi } from "api/amplify";
import { Counter, CountRecord } from "slots/Counter/types";
import { dayMs, perDay, CountsPerDay } from "historical-data/data";
import styled from "styled-components";
import { camelCaseToTitleCase } from "slots/Counter/utils";

const colors = [
  "var(--red)",
  "var(--orange)",
  "var(--green)",
  "var(--blue)",
  "var(--indigo)",
  "var(--purple)",
  "var(--pink)",
];

const Box = styled.div`
  display: flex;
`;

var getMonth = function (idx: any) {
  var objDate = new Date();
  objDate.setDate(1);
  objDate.setMonth(idx - 1);

  var locale = "en-us",
    month = objDate.toLocaleString(locale, { month: "long" });

  return month;
};

const Day: React.FC<{ day: string; y: any }> = ({ day, y }) => (
  <div key={day}>
    <Box>
      {day.split("/")[1].toString().padStart(2, "0")}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {Object.keys(y).map((key, index) => {
        const value = (y[key].find((_: any) => _.date === day)?.total || "00")
          .toString()
          .padStart(2, "0");
        return (
          <div key={index}>
            <div
              style={{
                color: colors[index],
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {value}&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        );
      })}
    </Box>
    <Gap />
  </div>
);

const FitnessLog: React.FC<{ slotArgs: string[] }> = ({
  slotArgs: [username],
}) => {
  const [data] = useAmlifyApi(username, "Counters");
  const counters: Counter[] = data?.Counters;
  const [response] = useAmlifyApi(
    username,
    counters.map((_) => _.name).join(", ")
  );
  const x: { [key: string]: CountRecord[] } = response;
  const y = Object.keys(x).reduce((all, key) => {
    all[key] = perDay(x[key]);
    return all;
  }, {} as { [key: string]: CountsPerDay[] });

  const daysSinceBeginning = new Array(
    Math.floor(
      (Date.now() - Math.min(...Object.values(x).map((_) => _[0].timestamp))) /
        dayMs
    )
  )
    .fill(1)
    .map((_, index) =>
      new Date(Date.now() - dayMs * index).toLocaleDateString()
    );

  return (
    <>
      <div
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            backdropFilter: "blur(5px)",
            paddingBottom: "16px",
            height: 72,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Title>{username}'s Fitness</Title>

          <Box>
            {["Date", ...Object.keys(x)].map((countee, index) => (
              <span
                style={{
                  transform: "rotate(-45deg)",
                  fontSize: "8px",
                  transformOrigin: "0, 0",
                  width: "34px",
                  color: index === 0 ? "black" : colors[index - 1],
                }}
              >
                {camelCaseToTitleCase(countee)}
              </span>
            ))}
          </Box>
        </div>
        <section
          style={{
            maxHeight: "100%",
            overflow: "auto",
            paddingTop: 72,
            paddingBottom: 32,
          }}
        >
          {daysSinceBeginning
            .reduce((all, date) => {
              const [m] = date.split("/");
              const month = getMonth(m);
              const match = all.find((_) => _.month === month);
              if (match) {
                match.dates.push(date);
              } else {
                all.push({
                  month,
                  dates: [date],
                });
              }
              return all;
            }, [] as { month: string; dates: string[] }[])
            .map(({ month, dates }) => {
              return (
                <div key={month}>
                  <Heading>{month}</Heading>
                  <Gap />
                  {dates.map((day) => (
                    <Day day={day} y={y} />
                  ))}
                  <Gap />
                  <Gap />
                </div>
              );
            })}
        </section>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Card withPadding={false}>
            <NavigationLinkListItem
              to={"Profile"}
              toArgs={[username]}
              from={"FitnessLog"}
              fromArgs={[username]}
            >
              More from Herman
            </NavigationLinkListItem>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FitnessLog;
