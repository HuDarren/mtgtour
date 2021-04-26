import React from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../../store";
import "./player.css";

function PlayerHome(props) {
  React.useEffect(() => {
    props.fetchPlayer(props.match.params.id);
  }, []);

  let player = props.player[0];

  return (
    <div className="landingA-container">
      <div className="landingA-title">
        <div className="landingA-contentA">
          {props.player.length ? (
            <div>
              <img className="landingA-image" src={player.image}></img>
              <div className="landingA-title">{player.name}</div>
            </div>
          ) : null}
        </div>
      </div>
      <div>
        {props.player.length && player.decks.length ? (
          <div class="containerA gridA centerA">
            {props.player[0].decks.map((deck) => {
              return (
                <div className="landingA-content">
                  <img className="landingA-image" src={deck.image}></img>
                  <div className="landingA-text">{deck.commander}</div>
                  <div className="landingA-text">{deck.points}</div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
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
