import React, { useState, useCallback } from "react";
import { Title } from "../components/typography";
import { NavigationLinkListItem } from "navigation";
import Gap from "components/Gap";
import { Card } from "exports";
import { API } from "aws-amplify";
import { FixedLayout } from "components/FixedLayout";

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
      window.location.href = "/";
    });
  }, [password, username]);
  return (
    <FixedLayout
      before={<Title>Login</Title>}
      after={
        <Card withPadding={false}>
          <NavigationLinkListItem
            to={"Profile"}
            toArgs={["Herman"]}
            from={"Login"}
          >
            starikov.dev
          </NavigationLinkListItem>
        </Card>
      }
    >
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
    </FixedLayout>
  );
};

export default Login;
