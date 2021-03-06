import React from "react";
import { connect } from "react-redux";
import { fetchAllDeck } from "../../store";
import { Link } from "react-router-dom";
import "./rank.css";

function RankSingle(props) {
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
      const { image, commander, points, TournPlayed, player, id } = entry;
      return (
        <tr key={index}>
          <img className="rankImage" src={image}></img>
          <td>{index + 1}</td>
          <td>{commander}</td>
          <td>{points}</td>
          <td>{TournPlayed}</td>
          <td>
            <Link className="button" to={`/player/${id}`}>
              {player.name}
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <div className="label-container">
        <div className="label">TOP MTG EDH (COMMANDER) PLAYER RANKINGS</div>
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

export default connect(mapState, mapDispatch)(RankSingle);
