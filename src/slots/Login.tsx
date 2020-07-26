import React, { useState } from "react";
import { Title } from "../components/typography";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
import { Card } from "exports";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
          <input
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <input
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
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
