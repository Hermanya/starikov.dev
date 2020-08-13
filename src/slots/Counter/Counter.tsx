import React, { useState } from "react";
import styled from "styled-components";
import { useAmlifyApi } from "api/amplify";
import { CountRecord, Counter as CounterType } from "./types";
import { maxRepsPerDay, todaysTotal } from "historical-data/data";
import Confetti from "react-confetti";
import { getSlotWidth } from "navigation";
import { camelCaseToTitleCase } from "./utils";
import { InteractiveText, Gap, Card, NavigationLinkListItem } from "exports";

const Count = styled.div`
  font-size: 48px;
  font-variant-numeric: tabular-nums;
  user-select: none;
`;

const CountCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const Counter: React.FC<{ slotArgs: string[] }> = ({
  slotArgs: [username, countee],
}) => {
  const [count, setCount] = useState(0);

  const [data, updateData] = useAmlifyApi(username, `${countee}, Counters`);

  const countRecords: CountRecord[] = data?.[countee] || [];
  const counters: CounterType[] = data?.Counters;
  const last7Days = countRecords.filter(
    (_) => Date.now() - _.timestamp < 1000 * 60 * 60 * 24 * 7
  );
  const average =
    last7Days.reduce((sum, x) => sum + x.count, 0) / last7Days.length;
  const defaultSetTarget = 10;
  const setTarget = countRecords.length
    ? Math.round(average + 1)
    : defaultSetTarget;
  const setCircleRef = React.useRef<SVGCircleElement>(null);
  const setCircleRadius = setCircleRef?.current?.r?.baseVal?.value;
  const setCirlceCircumference = setCircleRadius
    ? setCircleRadius * 2 * Math.PI
    : 0;
  const dayCircleRef = React.useRef<SVGCircleElement>(null);
  const dayCircleRadius = dayCircleRef?.current?.r?.baseVal?.value;
  const dayCirlceCircumference = dayCircleRadius
    ? dayCircleRadius * 2 * Math.PI
    : 0;

  const dayTarget = Number.isFinite(maxRepsPerDay(last7Days))
    ? maxRepsPerDay(last7Days)
    : 100;
  const dayTotal = todaysTotal(countRecords);

  return (
    <>
      {count >= setTarget && (
        <Confetti
          width={getSlotWidth()}
          height={window.innerHeight}
          numberOfPieces={50}
        />
      )}
      <CountCard
        onPointerDown={() => {
          setCount(count + 1);
        }}
        style={{
          flex: 3,
        }}
      >
        <div>
          <div style={{ color: "var(--green)", textAlign: "center" }}>
            {setTarget &&
              `Let's do ${setTarget} ${camelCaseToTitleCase(
                countee
              )} in this set`}
          </div>
          <div style={{ color: "var(--blue)", textAlign: "center" }}>
            {dayTarget && `targetting ${dayTarget} by the end of day`}
          </div>
        </div>
        <Count
          style={{
            transition: "0.25s",
            color: "var(--text)",
            position: "relative",
          }}
        >
          {count.toString().padStart(2, "0")}

          <svg
            width="128"
            height="128"
            viewBox="0 0 100 100"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <circle
              stroke="var(--green)"
              strokeWidth="8px"
              fill="transparent"
              r="36"
              cx="50"
              cy="50"
              strokeLinecap="round"
              opacity="0.25"
            />
            <circle
              stroke="var(--green)"
              strokeWidth="8px"
              strokeDasharray={`${setCirlceCircumference} ${setCirlceCircumference}`}
              fill="transparent"
              r="36"
              cx="50"
              cy="50"
              strokeLinecap="round"
              ref={setCircleRef}
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
                strokeDashoffset:
                  setCirlceCircumference * (1 - count / setTarget),
                transition: "stroke-dashoffset 0.250s",
              }}
            />
            <circle
              stroke="var(--blue)"
              strokeWidth="8px"
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
              strokeLinecap="round"
              opacity="0.25"
            />
            <circle
              stroke="var(--blue)"
              strokeWidth="8px"
              strokeDasharray={`${dayCirlceCircumference} ${dayCirlceCircumference}`}
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
              strokeLinecap="round"
              ref={dayCircleRef}
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
                strokeDashoffset:
                  dayCirlceCircumference * (1 - (dayTotal + count) / dayTarget),
                transition: "stroke-dashoffset 0.250s",
              }}
            />
          </svg>
        </Count>
        <div>
          {count ? (
            <InteractiveText
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const countRecord: CountRecord = {
                  timestamp: Date.now(),
                  count: count - 1,
                };
                updateData({
                  [countee]: [...countRecords, countRecord],
                  Counters: counters.map((counter) => {
                    if (counter.name === countee) {
                      counter.lastUpdatedAt = Date.now();
                    }
                    return counter;
                  }),
                });
                setCount(0);
              }}
            >
              Save
            </InteractiveText>
          ) : (
            <InteractiveText>Start tapping</InteractiveText>
          )}
          <Gap />
        </div>
      </CountCard>
      <Gap />
      <section
        style={{
          flex: 1,
        }}
      >
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"CounterDashboard"}
            toArgs={[username, countee]}
            from={"Counter"}
            fromArgs={[username, countee]}
          >
            Historical Data for {camelCaseToTitleCase(countee)}
          </NavigationLinkListItem>
          <NavigationLinkListItem
            to={"Counters"}
            toArgs={[username]}
            from={"Counter"}
            fromArgs={[username, countee]}
          >
            Other Counters
          </NavigationLinkListItem>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={[username]}
            from={"Counter"}
            fromArgs={[username, countee]}
          >
            More from {username}
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default Counter;
