import React, { useState } from 'react';
import Header from '../Header/Header';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { IoMdArrowDropleftCircle } from 'react-icons/io';
import { nextMonth, prevMonth } from '../calculation/constants';

function Weeks( { thisMonth } ) {
    const [current,setCurrent] = useState(0);
    const today = (new Date()).toString();

    const month = today.split(' ')[1];

    const decCurrent = () => {
        if(current === 0)
            return;
        setCurrent(current - 1)
    }

    const incCurrent = () => {
        if(current === thisMonth.length - 1)
            return;
        setCurrent(current + 1)
    }
    return (
        <div>
            <Header/>
            <div class="w-full border-x-2 border-b-2 border-white grid grid-cols-7 divide-x divide-y">
            {
                thisMonth[current].map(element => (element.value !== 0 ? 
                    <div key={element.value} class="h-[35em] px-5 py-2">{element.value}</div> :
                    <div class="h-[35em]"></div>
                ))
            }
            </div>
            <div class="grid grid-cols-2 justify-items-center mt-10">
                <div>
                {
                    current !== 0 ?
                        <IoMdArrowDropleftCircle size={40} class={current !== 0 ? "cursor-pointer" : "hidden"} onClick={() => decCurrent()}/>
                        :
                        <p class="cursor-pointer text-2xl">{prevMonth(month)}</p>
                }
                </div>
                <div>
                {
                    current !== thisMonth.length - 1 ?
                        <IoMdArrowDroprightCircle size={40} class={current !== thisMonth.length - 1 ? "cursor-pointer" : "hidden"} onClick={() => incCurrent()}/>
                        :
                        <p class="cursor-pointer text-2xl">{nextMonth(month)}</p>
                }
                </div>
            </div>
        </div>
    )
}

export default Weeks;