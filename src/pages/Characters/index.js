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
            <button className="load-more-bnt" >Carregar Mais</button>   
        </div>
        
    );
}

export default Characters;