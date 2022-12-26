import React from 'react';

function MonthHeader( { month, year } ) {
    return (
        <div className="col-span-1 border-b-2 border-red-500 flex justify-evenly items-center xl:text-4xl lg:pt-8 lg:pb-3">
            <div className="w-fit">{year}</div>
            <div>{month}</div>
        </div>
    );
}

export default MonthHeader;