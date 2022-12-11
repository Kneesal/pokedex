import React from "react";

const SearchBox = ({handleChange}) => {
    return (
        <div className="searchbox">
        <input type="search" onChange={handleChange}></input>
        </div>
    )
}

export default SearchBox