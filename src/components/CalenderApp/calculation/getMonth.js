import { monthMax } from './constants';
import getWeek from './getWeek'; 

function getMonth(day, month, value)
{

    const output = {
        data: [],
        month: month
    };

    const max = monthMax(month);

    while(value > 1)
    {
        value -= 7;
    }
    let nextWeek = getWeek(day, value, max)
    while(nextWeek && value < max + 7 && nextWeek[0].value < max && nextWeek.length)
    {
        if(nextWeek.length <= 7)
            output.data.push(nextWeek);
        value = value + 7;
        nextWeek = getWeek(day, value, max)
    }
    
    return output;
}

export default getMonth;