import React from 'react';
import { oneWeek } from '../calculation/constants';

function Header() {

    return (
        <div class="w-full border-b-2 border-x-2 border-white grid grid-cols-7 divide-x">
        {
            oneWeek.map(element => (
                <div class="px-5 py-2">
                    {element}
                </div>
            ))
        }
        </div>
    );
}

export default Header;