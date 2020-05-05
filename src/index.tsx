import React from "react";

import { hydrate, render } from "react-dom";
import * as _ from "styled-components/cssprop"; // eslint-disable-line
import "./index.css";
import "./hljs.css";
import * as serviceWorker from "./serviceWorker";
import { Root } from "navigation";

const App = () => {
  return <Root />;
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
