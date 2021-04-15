import React from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingHome } from "./components/index";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <LandingHome />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
