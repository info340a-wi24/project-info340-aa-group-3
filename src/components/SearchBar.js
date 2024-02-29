import React, {useState} from 'react';
import data from "../data/protestdata.json";

export default function SearchBar(props) {
    const[searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <label> Search </label>
        </div>
    )
    
}