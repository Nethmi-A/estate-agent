import React, { useState } from 'react';
import {FaRegHeart} from "react-icons/fa";

const SearchBar = ({onSearch, toggleFavourites}) => {

    const [filters, setFilters] = useState({
        tenure:"",
        type: "",
        location: "",
        minPrice: "",
        maxPrice: "",
        });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filters);
    };


    return(
        <header className="main-header">
           
            <div className='fav-icon' title='See Favourites'
            onClick={toggleFavourites}>
                <FaRegHeart className='heart-icon'/>
            </div>

    <div className="searchbar">
        <form className="search-form" onSubmit={handleSubmit}>
            {/* filtering based on tenure */}
            <select name="tenure" onChange={handleChange}>
            <option value="">Tenure</option>
            <option value="freehold">Freehold</option>
            <option value="leasehold">Leasehold</option>
            </select>

            {/* filtering based on property type */}
            <select name="type" onChange={handleChange}>
            <option value="">Property Type</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            </select>

            {/* filtering based on location */}
            <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            />

            {/* getting favoured min price of the user */}
            <input
            type="number"
            name="minPrice"
            placeholder="Min price"
            value={filters.minPrice}
            onChange={handleChange}
            />

            {/* getting max price */}
            <input
            type="number"
            name="maxPrice"
            placeholder="Max price"
            value={filters.maxPrice}
            onChange={handleChange}
            />


            <button type="submit">Search</button>
        </form>
    </div>

</header>

                    

    );
};

export default SearchBar;
