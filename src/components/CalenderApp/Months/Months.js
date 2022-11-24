import React, { useEffect, useRef, useState } from 'react';
import { getWindowSize, nextMonth, prevMonth } from '../calculation/constants';
import Header from '../Header/Header';
import MonthHeader from '../Header/MonthHeader';



function Months( { thisYear } ) {
    let index = thisYear.findIndex(element => element.active === true);
    const [month,setMonth] = useState(thisYear[index].info.month);

    const [current,setCurrent] = useState(index);
    const [prev,setPrev] = useState(prevMonth(month));
    const [next,setNext] = useState(nextMonth(month));

    const handleScroll = event => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    };

    const decCurrent = () => {
        if(current === 0)
            return;
        setCurrent(current - 1); 
        setMonth(thisYear[current - 1].info.month);
        setPrev(month);
    }

    const incCurrent = () => {
        if(current === thisYear.length - 1)
            return;
        setCurrent(current + 1)
        setMonth(thisYear[current + 1].info.month);
        setNext(month);
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleScroll = event => {
        console.log('window.scrollY', window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div class="fixed">
            <MonthHeader month={month} year={"2022"}/>
            <div class="col-span-2" onScroll={handleScroll}>
                <Header month={month}/>
                <div class="w-full h-full border-x-2 border-b-2 border-white grid grid-cols-7 divide-x divide-y">
                {
                    thisYear[current].info.data.map(element => (
                        element.map(inner => ( inner.value !== 0 ? 
                            <div key={inner.value} class="h-24 px-5 py-2">{inner.value}</div> :
                            <div class="h-24"></div>
                        ))
                    ))
                }
                </div>
            </div>
        </div> 
    );
}

export default Months;