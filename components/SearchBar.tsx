'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const Search = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        const defaultValue = searchParams.get('q') || '';
        setQuery(defaultValue);
    }, []);

    return (
        <form
            action={'/'}
            method="get"
            className="group mx-auto mb-10 mt-4 flex max-w-screen-sm items-center rounded-full bg-gray-700/75 px-5 py-2 focus-within:rounded-lg focus-within:bg-gray-700 md:mb-20 md:text-lg"
        >
            <MdLocationPin />
            <input
                name="q"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Please type your city name"
                className="w-full bg-transparent px-3 outline-none"
                required
            />

            <button>
                <FaSearch />
            </button>
        </form>
    );
};

const SearchBar = () => {
    return (
        <Suspense>
            <Search />
        </Suspense>
    );
};

export default SearchBar;
