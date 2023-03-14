
import React from "react";

 interface props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({handleChange}:props) => {
    return (
        <div className="searchbox">
        <input type="search" onChange={handleChange}></input>
        </div>
    )
}

export default SearchBox