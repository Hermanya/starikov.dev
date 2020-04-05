import React from "react";

import { hydrate, render } from "react-dom";
import * as _ from "styled-components/cssprop"; // eslint-disable-line
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import blogRoutes from "./components/blog/blogRoutes";
import { prerenderedLoadable } from "./prerenderedLoadable";

const LandingPage = prerenderedLoadable(() =>
  import("./components/landing/LandingPage")
);

const LegalPage = prerenderedLoadable(() =>
  import("./components/legal/LegalPage")
);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {blogRoutes}
        <Route path="/about" component={LandingPage} />
        <Route path="/legal" component={LegalPage} />
        <Redirect exact from="/" to="/about/me" />
        <Redirect exact from="/legal" to="/legal/privacy-policy" />
      </Switch>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
if (rootElement!.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
