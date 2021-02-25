import React from "react";
import "./App.scss";
import Scoreboard from "./components/ScoreBoard/Scoreboard";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Scoreboard />
    </div>
  );
}

export default App;
