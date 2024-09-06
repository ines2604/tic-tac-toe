import React, { useContext } from "react";
import { PlayContext } from "../helpers/Contexts";
import Box from './Box';

function Game() {
    const { tab } = useContext(PlayContext);

    return (
        <div className="game">
            {tab.map((value, index) => (
                <Box key={index} index={index} />
            ))}
        </div>
    );
}

export default Game;
