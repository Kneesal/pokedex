
import React, { ChangeEvent } from "react";

 interface props {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({handleChange}:props) => {
    return (
        <div className="searchbox">
        <input type="search" onChange={(e) =>handleChange(e)}></input>
        </div>
    )
}

export default SearchBox