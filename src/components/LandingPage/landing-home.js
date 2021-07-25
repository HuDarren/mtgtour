import React from "react";
import { connect } from "react-redux";
import { fetchAllPlayer } from "../../store";
import "./landing.css";

function LandingHome(props) {
  React.useEffect(() => {
    props.fetchAllPlayer();
  }, []);

  console.log(props.player);

  return (
    <div className="landingA-container">
      <div class="containerA gridA centerA">
        {props.player.length ? (
          <div className="landingA-content">
            {props.player.map((heros) => {
              return (
                <div className="landingA-content">
                  <img
                    alt="img"
                    src={heros.image}
                    className="landingA-image"></img>
                  <div className="landingA-text">{heros.name}</div>
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
  fetchAllPlayer: () => dispatch(fetchAllPlayer()),
});

export default connect(mapState, mapDispatch)(LandingHome);
