import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Space from "components/Space";
import { NavigationLinkListItem } from "navigation";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const doTheThing = () => {
      try {
        localStorage.setItem(
          "counter",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("counter") ?? "[]"),
            {
              timestamp: Date.now(),
              count,
            },
          ])
        );
      } catch (e) {}
    };
    window.onunload = doTheThing;
  }, [count]);

  return (
    <Container
      onPointerDown={() => {
        setCount(count + 1);
      }}
    >
      <div>Tap</div>
      <Space />
      <strong>{count}</strong>

      <div
        style={{
          margin: "auto 0 16px",
          position: "fixed",
          bottom: "16px",
          width: "100%",
        }}
      >
        <NavigationLinkListItem to={"Herman"} from={"Counter"}>
          starikov.dev
        </NavigationLinkListItem>
      </div>
    </Container>
  );
};

export default Counter;
