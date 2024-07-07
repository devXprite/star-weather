'use client';

import searchGeo from '@/actions/searchGeo';
import { City } from '@/types/CityType';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const SearchBar = () => {
    const searchParams = useSearchParams();

    const [query, setQuery] = useState<string>('');
    // const [suggestions, setSuggestions] = useState<City[]>([]);

    useEffect(() => {
        const defaultValue = searchParams.get('q') || '';
        setQuery(defaultValue);
    }, []);

    // useEffect(() => {
    //     if (query.length < 2) return;
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     searchGeo(query).then(data => setSuggestions(data));

    //     return () => controller.abort();
    // }, [query]);

    return (
        <form
            action={'/'}
            method="get"
            className="group mx-auto mb-10 md:mb-20 mt-4 flex max-w-screen-sm items-center rounded-full bg-gray-700/75 px-5 py-2 focus-within:rounded-lg focus-within:bg-gray-700 md:text-lg"
        >
            <MdLocationPin />
            <input
                name="q"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Please type your city name"
                className="w-full bg-transparent px-3 outline-none"
            />

            <button>
                <FaSearch />
            </button>

            {/* {query.length >= 0 && (
                <div className="absolute left-1/2 top-20 shadow-2xl shadow-gray-900 z-10 w-full max-w-screen-sm -translate-x-1/2 -translate-y-0.5 rounded-b-xl bg-gray-700">
                    {suggestions.map((city, index) => (
                        <div key={index} className="px-4 py-2">
                            {city.name}, {city.country}
                        </div>
                    ))}
                </div>
            )} */}
        </form>
    );
};

export default SearchBar;
