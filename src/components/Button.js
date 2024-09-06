import React, { useContext } from 'react';
import { PlayContext } from '../helpers/Contexts';

function Button() {
    const { setXIsPlaying, setTab, setPlaying } = useContext(PlayContext);

    function Reset() {
        setXIsPlaying(true);
        setTab(Array(9).fill(null));
        setPlaying(true);
    }

    return (
        <div className='restartButt'>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Button;
