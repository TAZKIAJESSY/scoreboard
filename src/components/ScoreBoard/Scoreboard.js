import React from "react";
import { useState } from "react";
import Player from "../Player/Player";
import AppPlayerForm from "../AddPlayerForm";
import ScoreBoard from "./ScoreBoard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}
function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}
//*****Alternate method of compare_name */
// function compare_name(player_a, player_b) {
//   const name_a = player_a.name.toUpperCase();
//   const name_b = player_b.name.toUpperCase();

//   if (name_a > name_b) {
//     return 1;
//   } else if (name_a < name_b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Jessy", score: 12 },
    { id: 2, name: "Tomaz", score: 5 },
    { id: 3, name: "Sebss", score: 8 },
    { id: 4, name: "Quin", score: 15 },
  ]);

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  //console.log("Sorted by name: ", sort_name);

  //console.log(sort_players);
  //console.log(players);

  function change_sorting(event) {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  }

  function incremnentScore(id) {
    //passing a callback down to player
    //console.log(id);
    const new_players_array = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player, //suppose name:{jessy score:12 score:13}
          // and then overriding the score property to be incremented
          score: player.score + 1, //suppose name:{jessy score:13}
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    set_players(new_players_array);
  }
  console.log("incrementScore");

  function resetButton() {
    //map over score to reset the increment value to 0 and then set the return(p) to set_players
    const resetScore = players.map((p) => {
      return {
        ...p,
        score: 0,
      };
    });
    set_players(resetScore);
  }

  function randomButton() {
    const random = players.map((p) => {
      // score to random value between 1 and 100
      return {
        ...p,

        score: Math.floor(Math.random() * 100 + 1),
      };
    });
    set_players(random);
  }
  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    const newPlayer = { id: players.length + 1, name, score: 0 };
    console.log("NEW PLAYER", newPlayer);
    const updatedArray = [...players, newPlayer];
    console.log(":NEW ARRAY OF PLAYERS", updatedArray);
    set_players(updatedArray);
  };
  return (
    <div className="scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>{" "}
        <button onClick={resetButton}>Reset</button>{" "}
        <button onClick={randomButton}>Random Value</button>
      </p>

      {players_sorted.map((p, index) => {
        return (
          <Player
            key={index}
            id={p.id}
            incremnentScore={incremnentScore}
            name={p.name}
            score={p.score}
          />
        );
      })}

      <AppPlayerForm addPlayer={addPlayer} />
    </div>
  );
}

export default Scoreboard;
