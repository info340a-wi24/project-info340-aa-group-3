import React, {useState} from 'react';
import ProtestList from './ProtestList';
import protestData from "../data/protestdata.json";
import ProtestHistorySlider from './ProtestHistorySlider';
import Testimonials from './Testimonials';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { firebaseConfig } from "./Config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const database = getDatabase();

// Reference Code: https://www.youtube.com/watch?v=MY6ZZIn93V8&t=628s
export default function SearchBar(props) {
    
    const [searchTerm, setSearchTerm] = useState("");
    
    const keys = ["title", "category", "organizer", "date", "location_name", "state", "city", "zip"]
 
    // const searchMatches = (data) => {
    //     return data.filter((protest) =>
    //         keys.some((key) => protest[key].toLowerCase().includes(searchTerm))
    //     );
    // };

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    };

    

    return (
        <div>
            <input 
            type="text" 
            placeholder="Search for protests..." 
            className="search justify-content-center"
            onChange={handleSearch} />
            {/* <ProtestList cards={searchMatches(protestData)} /> */}
            <ProtestList cards={database}/>
            <ProtestHistorySlider />
            <Testimonials /> 
        </div>
    )
    
}