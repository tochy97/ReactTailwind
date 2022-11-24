import React, { useLayoutEffect, useRef, useState } from 'react';
import { gameContainer } from '../../components/common/ClassNames';

function SnakeGame() {
    const containerRef = useRef(null);
    const [blockWidth, setBlockWidth] = useState(0);

    useLayoutEffect(() => {
            let width = containerRef.current.offsetWidth;
            setBlockWidth(width / 15);
    }, []);

    console.log(blockWidth);
    return (
        <div  ref={containerRef} className={gameContainer}>
            {
                
            }
        </div>
    );
}

export default SnakeGame;