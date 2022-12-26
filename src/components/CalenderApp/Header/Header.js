import React from 'react';
import { oneWeek } from '../calculation/constants';

function Header() {

    return (
        <div className="w-full grid grid-cols-7 divide-x border-y border-grey-100 text-sm md:text-2xl">
        {
            oneWeek.map((element, index) => (
                <div className="md:px-5 py-2 text-center" key={index}>
                    {element}
                </div>
            ))
        }
        </div>
    );
}

export default Header;