import React from "react";
import { render } from "react-dom";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";

import "./index.css";

// COMPONENTS
import App from "./components/App";

render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path='/Login' component={Login} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
