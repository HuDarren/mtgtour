import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import {
  LandingHome,
  RankSingles,
  RankDoubles,
  Banlist,
  PlayerInfo,
  TournamentHome,
  GroupHome,
  PlayerSingle,
  Login,
} from "./components/index";
import { me } from "./store";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/player/:id" component={PlayerInfo}></Route>

        {isLoggedIn && (
          <Switch>
            <Route exact path="/" component={LandingHome}></Route>
            <Route exact path="/singles" component={RankSingles}></Route>
            <Route exact path="/doubles" component={RankDoubles}></Route>
            <Route exact path="/player/:id" component={PlayerInfo}></Route>
            <Route exact path="/banlist" component={Banlist}></Route>
            <Route exact path="/tournament" component={TournamentHome}></Route>
            <Route exact path="/tournament/:id" component={GroupHome}></Route>
            <Route exact path="/deck/:id" component={PlayerSingle}></Route>
          </Switch>
        )}
        <Route component={LandingHome} />
      </Switch>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.player.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

// function Routes() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={LandingHome}></Route>
//           <Route exact path="/singles" component={RankSingles}></Route>
//           <Route exact path="/doubles" component={RankDoubles}></Route>
//           <Route exact path="/player/:id" component={PlayerInfo}></Route>
//           <Route exact path="/banlist" component={Banlist}></Route>
//           <Route exact path="/tournament" component={TournamentHome}></Route>
//           <Route exact path="/tournament/:id" component={GroupHome}></Route>
//           <Route exact path="/deck/:id" component={PlayerSingle}></Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default Routes;
