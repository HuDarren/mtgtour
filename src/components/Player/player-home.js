import React from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../../store";
import "./player.css";

function PlayerHome(props) {
  React.useEffect(() => {
    props.fetchPlayer(props.match.params.id);
  }, [props.match.params.id]);

  let player = props.player[0];

  function renderData() {
    return player.decks.map((entry, index) => {
      return (
        <div>
          <img src={entry.image}></img>
          <div>{entry.commander}</div>
          <div>{entry.points}</div>
        </div>
      );
    });
  }

  return (
    <div className="player-container">
      <div>
        <img src={player.image}></img>
        <div>{player.name}</div>
      </div>
      <div>{renderData()}</div>
    </div>
  );
}

const mapState = (state) => ({
  player: state.player,
});

const mapDispatch = (dispatch) => ({
  fetchPlayer: (playerId) => dispatch(fetchPlayer(playerId)),
});

export default connect(mapState, mapDispatch)(PlayerHome);
