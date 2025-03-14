import "./characters.css";
import imgCharacters from "../../img/imgCharacter.png";
import Filters from "../../components/Filters";
import Cards from "../../components/Cards";

const Characters = () =>{
    return(
        <div className="container">
            <img src={imgCharacters} alt="Logo Rick and Morty"/>
            <Filters className="filters" /> 
            <Cards />  
        </div>
        
    );
}

export default Characters;