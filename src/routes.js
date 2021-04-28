import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  LandingHome,
  RankSingles,
  RankDoubles,
  Banlist,
  PlayerInfo,
  TournamentHome,
  GroupHome,
} from "./components/index";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingHome}></Route>
          <Route exact path="/singles" component={RankSingles}></Route>
          <Route exact path="/doubles" component={RankDoubles}></Route>
          <Route exact path="/player/:id" component={PlayerInfo}></Route>
          <Route exact path="/banlist" component={Banlist}></Route>
          <Route exact path="/tournament" component={TournamentHome}></Route>
          <Route exact path="/tournament/:id" component={GroupHome}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
