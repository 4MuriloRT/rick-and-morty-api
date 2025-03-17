import "./locations.css"
import imageLocations from "../../img/imgLocations.png"
import FilterLocation from "../../components/FilterLocation";
import LocationCards from "../../components/LocationCards";
import { useState } from "react";
const Locations = () =>{
    const [filters, setFilters] = useState({
        name: "",
        type: "",
        dimension: ""
    });
    
    return(
        <div className="container">
            <img src={imageLocations} alt="Imagens Rick and Morty" className="img-logo"/>
            <FilterLocation onFilterChange={setFilters}/>
            <LocationCards filters={filters}/>
        </div>
    );
};

export default Locations;