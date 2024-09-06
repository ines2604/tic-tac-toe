import React, { useContext } from "react";
import { PlayContext } from "../helpers/Contexts";

function Box({ index }) {
    const { xIsPlaying, setXIsPlaying, tab, setScoreX, setScoreO, setTab, playing, setPlaying } = useContext(PlayContext);
    const value = tab[index];

    const handleClick = () => {
        if (value === null && playing) {
            const newValue = xIsPlaying ? "X" : "O";
            const newTab = [...tab];
            newTab[index] = newValue;
            setTab(newTab);
            setXIsPlaying(!xIsPlaying);

            verifWinner(newTab);
        }
    };

    const winCond = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function verifWinner(newTab) {
        const indiceX = [];
        const indiceY = [];

        newTab.forEach((value, index) => {
            if (value === "X") {
                indiceX.push(index);
            }
            if (value === "O") {
                indiceY.push(index);
            }
        });

        for (let j = 0; j < winCond.length; j++) {
            if (winCond[j].every(index => indiceX.includes(index))) {
                setScoreX(prevScoreX => prevScoreX + 1);
                setPlaying(false);
                return;
            }
            if (winCond[j].every(index => indiceY.includes(index))) {
                setScoreO(prevScoreO => prevScoreO + 1);
                setPlaying(false);
                return;
            }
        }
    }

    return (
        <div>
            <button 
                className={`box ${value === "X" ? "red" : value === "O" ? "blue" : ""}`} 
                onClick={handleClick}
            >
                {value}
            </button>
        </div>
    );
}

export default Box;
