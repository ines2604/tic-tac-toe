import React, { useContext } from 'react';
import { PlayContext } from '../helpers/Contexts';

function Menu() {
    const { scoreX, scoreO, xIsPlaying } = useContext(PlayContext);
    return (
        <div className='menu'>
            <div className={`scoreX ${xIsPlaying ? 'xPlay' : ''}`}>X - {scoreX}</div>
            <div className={`scoreO ${!xIsPlaying ? 'oPlay' : ''}`}>O - {scoreO}</div>
        </div>
    );
}

export default Menu;
