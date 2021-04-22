import React from "react";

function Home() {
  const [state, setState] = React.useState({
    name: [
      { Ranking: 1, Player: "Roger", Commander: 21, Points: 0, Matches: 0 },
      { Ranking: 2, Player: "Novak", Commander: 21, Points: 0, Matches: 0 },
    ],
  });

  function renderTableData() {
    return state.name.map((student, index) => {
      const { Ranking, Player, Commander, Points, Matches } = student; //destructuring
      return (
        <tr key={Ranking}>
          <td>{Ranking}</td>
          <td>{Player}</td>
          <td>{Commander}</td>
          <td>{Points}</td>
          <td>{Matches}</td>
        </tr>
      );
    });
  }

  function renderTableHeader() {
    let header = Object.keys(state.name[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  return (
    <div>
      <table id="players">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
