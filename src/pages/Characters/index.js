import "./characters.css";
import imgCharacters from "../../img/imgCharacter.png";
import { useState } from "react";
import Filters from "../../components/Filters";
import Cards from "../../components/Cards";

const Characters = () =>{
    const [filters, setFilters] = useState({});
    return(
        <div className="container">
            <img className="image-logo" src={imgCharacters} alt="Logo Rick and Morty"/>
            <Filters className="filters" onFilterChange={setFilters} />
            <Cards filters={filters} />
        </div>
        
    );
}

export default Characters;