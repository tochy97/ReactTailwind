import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { GiPolarStar } from 'react-icons/gi';
import HoverBox from '../../HoverBox/HoverBox';

function Star({ startX, startY, startDir, size }) {
    const viewport_width = window.screen.width;
    const [isDone, setIsDone] = useState(startDir);
    const [isClicked, setIsClicked] = useState(false);

    const variants = {
        left : { x: viewport_width - viewport_width },
        right : { x: viewport_width - 50 },
    };
    
    const leftRoight = (latest) => {
        if(latest.x >= viewport_width - 50){
            setIsDone(true);
        }
        if(latest.x < 1){
            setIsDone(false);
        }
    };

    return (
        <motion.div
            initial = {{ 
                x: startX,
                y: startY
            }}
            animate = { !isDone ?  
                "right" :
                "left"
            }
            transition = {{
                x: { duration: Math.floor(Math.random() * (30 - 15) + 15) },
            }}
            variants={variants}
            onUpdate={leftRoight} 
        >
            <div className={size} class={
                size === "large" ? "w-10 h-10 ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-100" :
                size === "medium" ? "w-7 h-7 ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-100" :
                "w-4 h-4 ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-100"}>
                <HoverBox/>
            </div>
        </motion.div>
    );
}

export default Star;