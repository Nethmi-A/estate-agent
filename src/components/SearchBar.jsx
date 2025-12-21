import React from 'react';

const SearchBar = () => {
    return(
        <>
            <h3>Search for properties available for sale or rent</h3>
            <form>
                <label>Search</label>
                <input type="text" />
            </form>
            <button>For Sale</button>
            <button>For Rent</button>
        </>
    );
};

export default SearchBar;
