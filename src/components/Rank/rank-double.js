import React from "react";
import { connect } from "react-redux";
import { fetchAllDeck } from "../../store";
import "./rank.css";

function RankDoubles(props) {
  const [state, setState] = React.useState({
    name: props.deck,
  });

  React.useEffect(() => {
    props.fetchAllDeck();
    setState({
      name: props.deck,
    });
  }, []);

  function renderTableData() {
    return props.deck.map((entry, index) => {
      const { image, commander, points, TournPlayed, player } = entry;
      return (
        <tr key={index}>
          <img className="rankImage" src={image}></img>
          <td>{index + 1}</td>
          <td>{commander}</td>
          <td>{points}</td>
          <td>{TournPlayed}</td>
          <td>{player.name}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <div className="label-container">
        <div className="label">TOP MTG EDH (COMMANDER) DOUBLES RANKINGS</div>
      </div>
      <table id="players">
        <tbody className="player-content">
          <tr>
            <th></th>
            <th>Rank</th>
            <th>Commander</th>
            <th>Points</th>
            <th>Matches</th>
            <th>Player</th>
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
  fetchAllDeck: () => dispatch(fetchAllDeck()),
});

export default connect(mapState, mapDispatch)(RankDoubles);
