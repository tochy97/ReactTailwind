import React, { useRef, useState } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdToday } from 'react-icons/md';
import SearchBar from '../common/SearchBar/SearchBar';
import getYear from './calculation/getYear';
import Months from './Months/Months';

function CalenderApp() {
    const today = (new Date()).toString();
    const calenderRef = useRef();
    const thisYear = getYear(today);

    let index = thisYear.findIndex(element => element.active === true);

    const [current,setCurrent] = useState(index);

    return (
        <div className="mt-36 w-full h-[80vh] p-6 md:p-12 text-2xl mt-16 overflow-y-auto snap-y snap-mandatory" ref={calenderRef}>
            <div className='absolute top-[90px] lg:top-[160px] flex'>
                <div className="ml-2 mt-3 cursor-pointer bg-none"><FaBirthdayCake size={25}/></div>
                <div className="ml-2 mt-3 cursor-pointer"><MdToday size={29}/></div>
                <div className='ml-2'><SearchBar/></div>
            </div>
            {
                thisYear.map((element,index) => (
                    <div className="lg:snap-start border-x border-grey-100" key={index}>
                        <Months thisMonth={element}/>
                    </div>
                ))
            }
        </div>
    );
}

export default CalenderApp;