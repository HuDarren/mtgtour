import React from "react";
import { connect } from "react-redux";
import { fetchSingleDeck } from "../../store";
import { Link } from "react-router-dom";
import "./player.css";

function RankSingle(props) {
  const [state, setState] = React.useState({
    name: props.deck,
  });

  React.useEffect(() => {
    props.fetchSingleDeck(props.match.params.id);
    setState({
      name: props.deck,
    });
  }, []);

  function renderTableData() {
    if (props.deck.length) {
      return props.deck[0].groups.map((entry, index) => {
        return (
          <tr key={entry.index}>
            <td>{entry.tournament.date.slice(0, 10)}</td>
            <td>{entry.tournament.name}</td>
            <td>{entry.points}</td>
          </tr>
        );
      });
    }
  }

  return (
    <div>
      <div className="label-container">
        {props.deck.length ? (
          <div className="label">{props.deck[0].commander}</div>
        ) : null}
      </div>

      <table id="players">
        <tbody className="player-content">
          <tr>
            <th>Date</th>
            <th>Tournament</th>
            <th>Points</th>
          </tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

const mapState = (state) => ({
  deck: state.deck,
});

const mapDispatch = (dispatch) => ({
  fetchSingleDeck: (id) => dispatch(fetchSingleDeck(id)),
});

export default connect(mapState, mapDispatch)(RankSingle);
