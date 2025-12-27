import React, { useState } from 'react';

const SearchBar = ({setSubmittedTerm}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedTerm(input);
    };

    return(
        <form onSubmit={handleSubmit} className="searchbar">
            {/* <img
                className="image-icon"
                src="images/search.png"
                alt="search"
                onChange={(e) => setInput(e.target.value)} />  */}

            <input id='search' 
            type="text"
            placeholder='Search for peoperties to buy or rent...'
            onChange={(e) => setInput(e.target.value)} />

            <div className="button-group">
                <button className="search-button">For Sale</button>
                <button className="search-button">For Rent</button>
            </div>
        </form>

            

    );
};

export default SearchBar;
