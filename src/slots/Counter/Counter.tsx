import React, { useState } from "react";
import styled from "styled-components";
import Gap from "components/Gap";
import { NavigationLinkListItem, useNextSlotFor } from "navigation";
import { InteractiveText } from "components/typography";
import Card from "components/Card";
import { useCountRecords, CountRecord } from "./useCountRecords";

const Count = styled.div`
  font-size: 64px;
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

const Counter = () => {
  useNextSlotFor("CounterDashboard", { from: "Counter" });
  const [count, setCount] = useState(0);
  const [countRecords, setCountRecords] = useCountRecords<CountRecord[]>([]);
  const average =
    countRecords.reduce((sum, x) => sum + x.count, 0) / countRecords.length;
  const defaultTarget = 10;
  const target = countRecords.length ? Math.round(average + 1) : defaultTarget;
  const circleRef = React.useRef<SVGCircleElement>(null);
  const radius = circleRef?.current?.r?.baseVal?.value;
  const circumference = radius ? radius * 2 * Math.PI : 0;

  return (
    <>
      <CountCard
        onPointerDown={() => {
          setCount(count + 1);
        }}
        style={{
          flex: 3,
        }}
      >
        <div>{target && `Target ${target}`}</div>
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
              r="46"
              cx="50"
              cy="50"
              strokeLinecap="round"
              opacity="0.25"
            />
            <circle
              stroke="var(--green)"
              strokeWidth="8px"
              strokeDasharray={`${circumference} ${circumference}`}
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
              strokeLinecap="round"
              ref={circleRef}
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
                strokeDashoffset: circumference * (1 - count / target),
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
                setCountRecords([...countRecords, countRecord]);
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
          <NavigationLinkListItem to={"CounterDashboard"} from={"Counter"}>
            Counter dashboard
          </NavigationLinkListItem>
          <NavigationLinkListItem to={"Herman"} from={"Counter"}>
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      </section>
    </>
  );
};

export default Counter;
