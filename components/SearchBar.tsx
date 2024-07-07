'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const SearchBar = () => {
    return (
        <div className="mx-auto  focus-within:bg-gray-700 mt-4 mb-20 flex max-w-screen-sm items-center rounded-full bg-gray-700/75 px-5 py-2 md:text-lg">
            <MdLocationPin />
            <input
                type="text"
                placeholder="Please type your city name"
                className="w-full bg-transparent px-3 outline-none"
            />

            <button>
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
