import React, { useState } from 'react';
import {FaRegHeart} from "react-icons/fa";

const SearchBar = ({setSubmittedTerm, toggleFavourites}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedTerm(input);
    };

    return(
        <header className="main-header">
            <div className='fav-icon'
            onClick={toggleFavourites}>
                <FaRegHeart className='heart-icon'/>
            </div>

    <div className="searchbar">

        <form onSubmit={handleSubmit}>
            <input
                id="search"
                type="text"
                placeholder="Search for properties to buy or rent..."
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    </div>
</header>

                    

    );
};

export default SearchBar;
