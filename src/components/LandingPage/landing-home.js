import React from "react";
import { connect } from "react-redux";
import { fetchAllPlayer } from "../../store";
import { Link } from "react-router-dom";
import "./landing.css";

function LandingHome(props) {
  React.useEffect(() => {
    props.fetchAllPlayer();
  }, []);

  return (
    <div>Hello</div>
    // <div className="landing-container">
    //   {props.player.length ? (
    //     <div class="container grid center">
    //       {props.player.map((heros) => {
    //         return (
    //           <div className="landing-content">
    //             <img
    //               alt="img"
    //               src={heros.image}
    //               className="landing-image"></img>
    //             <div className="landing-text">
    //               <Link className="button" to={`/player/${heros.id}`}>
    //                 {heros.name}
    //               </Link>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   ) : null}
    // </div>
  );
}

const mapState = (state) => ({
  player: state.player,
});

const mapDispatch = (dispatch) => ({
  fetchAllPlayer: () => dispatch(fetchAllPlayer()),
});

export default connect(mapState, mapDispatch)(LandingHome);
