import React, { Component } from "react";
import Singles from "./rank-single";
import Doubles from "./rank-double";

function RankHome(props) {
  const [state, setState] = React.useState({
    single: true,
    double: false,
  });

  function singleButton() {
    setState({
      single: true,
      double: false,
    });
  }

  function doubleButton() {
    setState({
      single: false,
      double: true,
    });
  }

  function display() {
    if (state.single) {
      return (
        <div>
          <Singles />
        </div>
      );
    }
    if (state.double) {
      return (
        <div>
          <Doubles />
        </div>
      );
    }
  }

  console.log(state);

  return (
    <div>
      <div>
        <button onClick={singleButton}>Singles</button>
        <button onClick={doubleButton}>Doubles</button>
      </div>
      <div>Top 100</div>
      <div>{display()}</div>
    </div>
  );
}

export default RankHome;
