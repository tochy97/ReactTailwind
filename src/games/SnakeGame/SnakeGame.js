import React, { useEffect, useState } from 'react';
import { container, gameContainer } from '../../components/common/ClassNames';
import { createMap, getSnake, moveDown, moveLeft, moveRight, moveUp, pauseGame } from './functions';

function SnakeGame() {

    const [thisMap, setThisMap] = useState(createMap());
    const [thisSnake, setThisSnake] = useState(null);

    useEffect(() => {
        if(thisMap?.data){
            setThisSnake(getSnake(thisMap.data));
        }
    }, [thisMap]);

    console.log(thisSnake)
    const handleKeyDown = event => {
        switch(event.key){
            case "ArrowDown":
                setThisMap(moveDown(thisMap, thisSnake));
                break;
            case "ArrowUp":
                setThisMap(moveUp(thisMap, thisSnake));
                break;
            case "ArrowLeft":
                setThisMap(moveDown(thisMap, thisSnake));
                break;
            case "ArrowRight":
                setThisMap(moveDown(thisMap, thisSnake));
                break;
            case "Escape":
                setThisMap(pauseGame(thisMap));
                break;
        }
    };
    
    return (
        <div className={container}>
            <div className={gameContainer} tabIndex={0} onKeyDown={handleKeyDown}>
                {
                    (thisMap?.paused) 
                    ?
                    <></>
                    :
                    thisMap?.data?.map(element => <div style={{ backgroundColor: element?.color, width:"2em", height:"2em", border: "solid white" }} ></div>)
                }
            </div>
        </div>
    );
}

export default SnakeGame;