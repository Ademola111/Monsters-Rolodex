import React from "react";
import './search-box.style.css';

export const SearchBox = ({ placeholder, handlechange }) =>(
    <input 
        type="search" 
        className="search"
        placeholder={placeholder} 
        onChange={handlechange} />
);