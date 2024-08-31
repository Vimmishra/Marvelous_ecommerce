import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Searchheader = () => {

    const navigate = useNavigate()
    const searchInput = useLocation()
    const URLSearch = new URLSearchParams(searchInput?.search)
    const searchQuery = URLSearch.getAll("q")
    const [search, setSearch] = useState(searchQuery)


    const handleSearch = (e) => {
        const { value } = e.target
        setSearch(value)

        if (value) {
            navigate(`/search?q=${value}`)
        } else {
            navigate("/search")
        }
    }


    return (
        <header className="flex justify-center items-center px-4 py-2  bg-gray-100">
            <input
                type="text"
                placeholder="Search..."
                className="w-full sm:w-3/4 md:w-2/3 lg:hidden px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleSearch} value={search}
            />
        </header>
    );
};

export default Searchheader;