import React from "react";
import { NavigationLinkListItem } from "navigation";
import styled from "styled-components";
import Card from "components/Card";
import Gap from "components/Gap";

const PageTitle = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0em;
  margin: 0;
`;

const Hannah = () => {
  return (
    <>
      <Gap />
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <PageTitle>Hannah Chun</PageTitle>
      </section>
      <Gap />
      <div
        style={{
          flex: 1,
        }}
      >
        <Card withPadding={false}>
          <NavigationLinkListItem
            renderIfActive
            to={"LegRaiseCounter"}
            from={"Hannah"}
          >
            Leg raise Counter
          </NavigationLinkListItem>
        </Card>
      </div>
      <Gap />
    </>
  );
};

export default Hannah;
