import React, { useState, useCallback } from "react";
import { Title } from "../components/typography";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
import { Card } from "exports";
import { API } from "aws-amplify";

const Login = () => {
  const [username, setUsername] = useState(localStorage.Login || "");
  const [password, setPassword] = useState("");
  const onSubmit = useCallback(() => {
    API.put("starikovDev", "/userData/login", {
      body: {
        username,
        password,
      },
    }).then((response) => {
      localStorage.AccessKey = response.AccessKey;
      localStorage.Login = username;
    });
  }, [password, username]);
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
          <button onClick={onSubmit}>Let's go</button>
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
