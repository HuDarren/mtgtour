import React from "react";
import { connect } from "react-redux";
import { fetchAllPlayer } from "../../store";
import { Link } from "react-router-dom";
import "./landing.css";
import { getByDisplayValue } from "@testing-library/react";

function LandingHome(props) {
  // const [player, setPlayer] = React.useState(player);

  React.useEffect(() => {
    props.fetchAllPlayer();
  }, []);

  return (
    <div className="landing-container">
      {props && props.player.length > 1 && Array.isArray(props.player) ? (
        <div class="container grid center">
          {props.player.map((heros) => {
            return (
              <div className="landing-content">
                <img
                  alt="img"
                  src={heros.image}
                  className="landing-image"></img>
                <div className="landing-text">
                  <Link className="button" to={`/player/${heros.id}`}>
                    {heros.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
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
