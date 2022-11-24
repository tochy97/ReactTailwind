import React from 'react';
import Star from './Star/Star';
import UserFollow from './UserFollow/UserFollow';

function index() {
    const viewport_w_delimeter = window.screen.width/5;
    const viewport_h_delimeter = window.screen.height/6;

    const getX = (count) => {
        const border_1 = viewport_w_delimeter * (count - 1);
        const border_2 = viewport_w_delimeter * count;
        return Math.floor(Math.random() * (border_2 - border_1) + border_1);
    };

    const getY = (count) => {
        const border_1 = viewport_h_delimeter * (count - 1);
        const border_2 = viewport_h_delimeter * count;
        return Math.floor(Math.random() * (border_2 - border_1) + border_1);
    };

    const points = [];
    let count_x = 1;
    let count_y = 1;

    while(count_x <= 3){
        while(count_y <= 5){
            if(count_y % 2 === 0){
                points.push({x: getX(count_x), y: getY(count_y), done: true, size: "small" });
                points.push({x: getX(count_x), y: getY(count_y), done: true, size: "medium" });
                points.push({x: getX(count_x), y: getY(count_y), done: true, size: "large" });
            }
            else{
                points.push({x: getX(count_x), y: getY(count_y), done: false, size: "small" });
                points.push({x: getX(count_x), y: getY(count_y), done: false, size: "medium" });
                points.push({x: getX(count_x), y: getY(count_y), done: false, size: "large" });
            }
            count_y++;
        }
        count_y = 1;
        count_x++;
    };
    
    
    return (
        <div>
        {
            points.map((element) => (
                <Star 
                    startX={element.x} 
                    startY={element.y}
                    startDir={element.done}
                    size={element.size}
                />
            ))
        }
        </div>
    );
}

export default index;