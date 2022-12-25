import { getRandomCords } from "../../components/common/Functions";

export const createMap = () => {
    const newSnake = getRandomCords();
    const prizeCords = getRandomCords();
    const map = {
        data:[],
        paused:false,
        thisSnake: newSnake,
    };
    for(let i=0; i<20; i++){
        for(let j=0; j<30; j++){
            map.data.push({
                isSnake:((i<newSnake.x && i>newSnake.x-3 && j===newSnake.y) ? true : false),
                isPrize:((i === prizeCords.x && j === prizeCords.y) ? true : false),
                color:((i<newSnake.x && i>newSnake.x-3 && j===newSnake.y) ? "green" : (i === prizeCords.x && j === prizeCords.y) ? "yellow" :  "black"),
                index:{ 
                    x:i,
                    y:j 
                }
            });
        }
    }
    return map;
}

const getIndex = (x,y) => {
    return (x * 30 + y);
}

export const getSnake = (thisMap) => {
    const snakeBody = thisMap.filter(element => element.isSnake)
    const output = [];
    snakeBody.forEach(element => {
        output.push({
            index: getIndex(element.index.x, element.index.y),
            x: element.index.x,
            y: element.index.y
            })
    });
    return output;
}

export const moveUp = (thisMap, thisSnake) => {
    let output = thisMap;
    thisSnake.forEach(element => output.data[element.index].isSnake = false );
    thisSnake.forEach(element => output.data[element.index - 30].isSnake = true);
    for(let i = 0; i<thisSnake.length; i++){
        output.data[thisSnake[i].index].color = "black";
        output.data[thisSnake[i].index - 30].color = "green";
    }
    return output;
};

export const moveDown = (thisMap, thisSnake) => {
    let output = thisMap;
    thisSnake.forEach(element => output.data[element.index].isSnake = false );
    thisSnake.forEach(element => output.data[element.index - 30].isSnake = true);
    for(let i = 0; i<thisSnake.length; i++){
        output.data[thisSnake[i].index].isSnake = false;
        output.data[thisSnake[i].index - 30].isSnake = true;
        console.log("old: " ,output.data[thisSnake[i].index], "new: " ,output.data[thisSnake[i].index - 30]);
    }
    return output;

};

export const moveLeft = (thisMap) => {

};

export const moveRight = (thisMap) => {

};

export const eatPrize = (thisMap) => {

};

export const pauseGame = (thisMap) => {

};