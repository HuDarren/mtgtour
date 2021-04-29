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

  function renderTableData() {
    if (props.tournament.length && props.tournament[0].deck) {
      return props.tournament.map((deck, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <img className="rankImage" src={deck.deck.image}></img>
            <td>{deck.deck.commander}</td>
            <td>{deck.points}</td>
          </tr>
        );
      });
    } else {
      <div></div>;
    }
  }

  return (
    <div>
      <div className="label-container">
        <div className="label">Tournament</div>
      </div>
      <table id="players">
        <tbody className="player-content">
          <tr>
            <th>Rank</th>
            <th></th>
            <th>Commander</th>
            <th>Points</th>
          </tr>
          {renderTableData()}
        </tbody>
      </table>
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
