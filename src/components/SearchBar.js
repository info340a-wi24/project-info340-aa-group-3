import React, {useState} from 'react';
import ProtestList from './ProtestList';
import protestData from "../data/protestdata.json";
import ProtestHistorySlider from './ProtestHistorySlider';
import Testimonials from './Testimonials';


// Reference Code: https://www.youtube.com/watch?v=MY6ZZIn93V8&t=628s
export default function SearchBar(props) {
    
    const [searchTerm, setSearchTerm] = useState("");
    
    const keys = ["title", "category", "organizer", "date", "location_name", "state", "city", "zip"]
 
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
            {searchTerm !== "" && <ProtestList cards={searchMatches(protestData)} />}            
            {searchTerm === "" && <ProtestHistorySlider />}
            {searchTerm === "" && <Testimonials /> }
        </div>
    )
    
}