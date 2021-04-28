import React from "react";
import { connect } from "react-redux";
import { fetchSingleTournament } from "../../store";
import "./group.css";

function GroupHome(props) {
  const [state, setState] = React.useState({
    name: "",
  });

  React.useEffect(() => {
    props.fetchSingleTournament(props.match.params.id);
  }, []);

  console.log("props", props.tournament);

  return (
    <div>
      <div className="label-container">
        <div className="label">GROUP</div>
      </div>
      <div>
        {props.tournament.length ? (
          <div>
            {props.tournament.map((deck) => {
              return (
                <div>
                  <img src={deck.deck.image}></img>
                  <div className="text">{deck.deck.commander}</div>
                  <div className="text">{deck.points}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text">Nothing</div>
        )}
      </div>
    </div>
  );
}

const mapState = (state) => ({
  tournament: state.tournament,
});

const mapDispatch = (dispatch) => ({
  fetchSingleTournament: (id) => dispatch(fetchSingleTournament(id)),
});

export default connect(mapState, mapDispatch)(GroupHome);
