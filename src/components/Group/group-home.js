import React from "react";
import { connect } from "react-redux";
import { fetchSingleTournament, fetchAllTournament } from "../../store";

function GroupHome(props) {
  const [state, setState] = React.useState({
    name: props.tournament,
  });

  React.useEffect(() => {
    // props.fetchAllTournament();
    props.fetchSingleTournament(props.match.params.id);
    setState({
      name: props.tournament,
    });
  }, []);

  console.log("props", props);

  function renderTableData() {
    return props.tournament.map((entry, index) => {
      const { date, name, description, decks, image } = entry;
      return (
        <tr key={index}>
          <td>{date.slice(0, 10)}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>{decks.length}</td>
          <img className="rankImage" src={image}></img>
        </tr>
      );
    });
  }

  return (
    <div>
      <div className="label-container">
        <div className="label">GROUP</div>
      </div>
      <table id="players">
        <tbody className="player-content">
          <tr>
            <th>Date</th>
            <th>Format</th>
            <th>Event Name</th>
            <th>Players</th>
            <th>Event Level</th>
          </tr>
          {/* {renderTableData()} */}
        </tbody>
      </table>
    </div>
  );
}

const mapState = (state) => ({
  tournament: state.tournament,
});

const mapDispatch = (dispatch) => ({
  fetchAllTournament: () => dispatch(fetchAllTournament()),
  fetchSingleTournament: (id) => dispatch(fetchSingleTournament(id)),
});

export default connect(mapState, mapDispatch)(GroupHome);
