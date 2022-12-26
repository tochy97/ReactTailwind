import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

function SearchBar(props) {
    return (
        <form className="max-w-sm pr-4">
            <div className="relative">
                <div className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3">
                    <BiSearchAlt/>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
    );
}

export default SearchBar;