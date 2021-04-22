import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingHome, Banlist } from "./components/index";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingHome}></Route>
          <Route exact path="/banlist" component={Banlist}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
