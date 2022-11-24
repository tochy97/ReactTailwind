import React, { useState } from 'react';
import { GoGear } from 'react-icons/go';
import getMonth from './calculation/getMonth';
import getYear from './calculation/getYear';
import Days from './Days/Days';
import MonthHeader from './Header/MonthHeader';
import Months from './Months/Months';
import Weeks from './Weeks/Weeks';

function CalenderApp() {
    const [rate, setRate] = useState("Month");

    const today = (new Date()).toString();

    const year = today.split(' ')[3];
    const day = today.split(' ')[0];
    const month = today.split(' ')[1];
    let value = parseInt(today.split(' ')[2]);

    const thisYear = getYear(today);

    const changeRate = () => {
        switch(rate){
            case "Week" : 
                setRate("Month");
                break;
            case "Month" : 
                setRate("Day");
                break;
            default :
                setRate("Week");
                break;
        }
    }
    return (
        <div class="w-screen h-[55em] h-16 p-12 text-2xl mt-16">
                {
                    rate === "Day" ? 
                        <Days/>
                    : rate === "Week" ?
                        <Weeks thisYear={thisYear} />
                    : 
                        <Months thisYear={thisYear} />
                }
        </div>
    );
}

export default CalenderApp;