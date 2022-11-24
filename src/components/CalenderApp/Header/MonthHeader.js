import React from 'react';

function MonthHeader( { month, year } ) {
    return (
        <div class="col-span-1 border-2 border-red-500 flex justify-evenly items-center text-4xl pt-8 pb-3">
            <div class="w-fit">{year}</div>
            <div>{month}</div>
        </div>
    );
}

export default MonthHeader;