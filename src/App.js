import React, { useState } from "react";
import './App.css';
import Menu from "./components/Menu";
import Game from "./components/Game";
import { PlayContext } from "./helpers/Contexts";
import Button from "./components/Button";

function App() {
  const [scoreX, setScoreX] = useState(0); 
  const [scoreO, setScoreO] = useState(0); 
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [tab, setTab] = useState(Array(9).fill(null));
  const [playing,setPlaying]=useState(true)

  return (
    <PlayContext.Provider value={{ scoreX, setScoreX, scoreO, setScoreO, tab, xIsPlaying, setXIsPlaying, setTab ,playing,setPlaying}}>
      <div className="Play">
        <Menu />
        <Game />
        <Button />
      </div>
    </PlayContext.Provider>
  );
}

export default App;
