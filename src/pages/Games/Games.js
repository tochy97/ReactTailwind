import React from 'react';
import { useLocation } from 'react-router-dom';
import { container } from '../../components/common/ClassNames';
import PacMan from '../../games/PacMan/PacMan';
import Runner from '../../games/Runner/Runner';
import SnakeGame from '../../games/SnakeGame/SnakeGame';

function Games() {
    let location = useLocation().state;
    const chosen = location?.chosen;

    return (
        <div className={container}>
        {
            chosen == "snake" ?
            <SnakeGame n={100}/>
            : chosen == "runner" ?
            <Runner/>
            : chosen == "pacman" ?
            <PacMan/>
            : <>Chose a game</>
        }
        </div>
    );
}

export default Games;