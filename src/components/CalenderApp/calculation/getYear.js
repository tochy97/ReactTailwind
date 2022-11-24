import getMonth from "./getMonth";
import getNextMonth from "./getNextMonth";
import getPrevMonth from "./getPrevMonth";

function getYear(today) {
    let day = today.split(' ')[0];
    let month = today.split(' ')[1];
    let value = parseInt(today.split(' ')[2]);
    const thisMonth = getMonth(day,month,value);

    const output = [
        {
            active: true,
            current: true,
            info: thisMonth
        }
    ];
    
    let next = getNextMonth(thisMonth);
    let nextMonth = getMonth(next.day, next.month, next.value);
    while(next.month !== "Dec"){
        output.push(
            {
                active: false,
                current: false,
                info: nextMonth
            }
        );
        next = getNextMonth(nextMonth);
        nextMonth = getMonth(next.day, next.month, next.value);
    }
    output.push(
        {
            active: false,
            current: false,
            info: nextMonth
        }
    );

    let prev = getPrevMonth(thisMonth);
    let prevMonth = getMonth(prev.day, prev.month, prev.value);
    while(prev.month !== "Jan"){
        output.unshift(
            {
                active: false,
                current: false,
                info: prevMonth
            }
        );
        prev = getPrevMonth(prevMonth);
        prevMonth = getMonth(prev.day, prev.month, prev.value);
    }
    output.unshift(
        {
            active: false,
            current: false,
            info: prevMonth
        }
    );
    return output;
}

export default getYear;