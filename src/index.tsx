import React from "react";

import * as ReactDOM from "react-dom";
import * as _ from "styled-components/cssprop"; // eslint-disable-line
import "./hljs.css";
import * as serviceWorker from "./serviceWorker";
import { Root } from "navigation";
import Loading from "components/Loading";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const NativeLookingStyle = navigator.userAgent.match(/Edg/)
  ? React.lazy(() => import("./native-look/edge"))
  : navigator.userAgent.match(/Chrome/)
  ? React.lazy(() => import("./native-look/chrome"))
  : navigator.userAgent.match(/Safari/)
  ? React.lazy(() => import("./native-look/safari"))
  : React.lazy(() => import("./native-look/firefox"));

const App = () => {
  return (
    <React.Suspense fallback={Loading}>
      <NativeLookingStyle />
      <Root />
    </React.Suspense>
  );
};

// const rootElement = document.getElementById("root");
// if (rootElement!.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }

// @ts-ignore
ReactDOM.unstable_createRoot(document.getElementById("root")).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
