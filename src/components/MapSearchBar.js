import React, {useState} from 'react';
import ProtestList from './ProtestList';
import ProtestData from "../data/protestdata.json";
// import MapPage from './MapPage';

export default function MapSearchBar(props) {
    
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

    // use the searchterm's coordinate to create a marker

    return (
        <div>
            <input 
            type="text" 
            placeholder="Search for protest locations..." 
            className="search justify-content-center"
            value={searchTerm}
            onChange={handleSearch} />
            {/* <ProtestList cards={searchMatches(ProtestData)} /> */}
        </div>
    )
}