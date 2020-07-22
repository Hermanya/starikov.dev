import React from "react";
import { Title } from "../components/typography";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
import { Card } from "exports";

const Login = () => {
  return (
    <>
      <Gap />
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Title>Login</Title>
      </section>
      <Gap />
      <section style={{ flex: 1 }}>
        <Card withPadding>
          <button
            onClick={() => {
              localStorage.login = "Herman";
              alert("hi Herman");
              window.location.href = "/";
            }}
          >
            Let's go
          </button>
        </Card>
      </section>
      <Gap />
      <div style={{ flex: 1, justifySelf: "flex-end" }}>
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={["Herman"]}
            from={"Login"}
          >
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      </div>
      <Gap />
    </>
  );
};

export default Login;
