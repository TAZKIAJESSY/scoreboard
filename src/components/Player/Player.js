import React from "react";
//import Player from "./Player.scss";

function Player(props) {
  // the event listener callback
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incremnentScore(props.id);
  };
  return (
    <div>
      <h1>{props.id}</h1>
      <h3>{props.name}</h3>
      <p>
        {" "}
        <li style={{ listStyleType: "none" }}>
          <span>Score:{props.score} </span>
          <button onClick={onClickIncrement}>Increment</button>
        </li>
      </p>
    </div>
  );
}

export default Player;
