import React, { useState, useEffect } from 'react';
import ProtestList from './ProtestList';
import protestData from "../data/protestdata.json";
import ProtestHistorySlider from './ProtestHistorySlider';
import Testimonials from './Testimonials';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./Config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const database = getDatabase();

// Reference Code: https://www.youtube.com/watch?v=MY6ZZIn93V8&t=628s
export default function HomePage(props) {
    
    const [cards, setCards] = useState([]);

    useEffect(() => {
      const cardsRef = ref(database, 'Protests');
        onValue(cardsRef, (snapshot) => {
            const cards = snapshot.val();
            if (cards) {
              setCards(Object.values(cards));
            }
          });
        }, []);

    const [searchTerm, setSearchTerm] = useState("");
    
    const keys = ["title", "category", "organizer", "date", "location_name", "state", "city", "zip"]
    //Jon commented this out but is needed for search
    const searchMatches = (data) => {
        return data.filter((protest) =>
            keys.some((key) => protest[key].toLowerCase().includes(searchTerm))
        );
    };

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    };

    

    return (
        <div>
            <h2 className= "searchCaption">Search by protest name, organizer, date, or location!</h2>
            <input 
            type="text" 
            placeholder="Search for protests..." 
            className="search"
            onChange={handleSearch} />  
            {searchTerm !== "" && <ProtestList cards={searchMatches(cards)} />}            
            {searchTerm === "" && <ProtestHistorySlider />}
            {searchTerm === "" && <Testimonials /> }
        </div>
    )
    
}