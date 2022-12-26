import React from 'react';
import Days from '../Days/Days';
import Header from '../Header/Header';
import MonthHeader from '../Header/MonthHeader';

function Months( { thisMonth } ) {
    const month = thisMonth.info.month;
    
    return (
        <div className="mb-12 border-y border-grey-100">
            <MonthHeader month={month} year={"2022"}/>
            <div className="col-span-2">
                <Header month={month}/>
                <div className="w-full h-full grid grid-cols-7 divide-x divide-y">
                {
                    thisMonth.info.data.map((element, index) => (
                        element.map((inner, innerIndex) => (
                            <Days key={`${index} ${inner?.value} ${innerIndex}`} value={inner?.value} />
                        ))
                    ))
                }
                </div>
            </div>
        </div> 
    );
}

export default Months;