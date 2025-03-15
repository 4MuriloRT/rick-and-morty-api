import "./charsdetails.css"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCharacterById, getEpisodeByUrl } from "../../services/api";

const CharactersDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    
    useEffect(() => {
        const fetchCharacter = async () =>{
            const data = await getCharacterById(id);
            if(data){
                setCharacter(data);
                
                const episodesDetails = await Promise.all(
                    data.episode.map(url => getEpisodeByUrl(url))
                );
                setEpisodes(episodesDetails);
            }
        };
        fetchCharacter();
    }, [id]);
    
    if(!character){
        return <div>Carregando...</div>;
    }
    
    return(
        <div className="character-container">
            <button onClick={() => navigate(-1)} className="go-back" >← Voltar </button>
            <div className="character-perfil">
                <img src={character.image} alt={character.name} className="character-foto" />
                <h1>{character.name}</h1>
            </div>
            <div className="details-container">
                <div className="character-info">
                    <h2>Informações</h2>
                    <p><strong>Genero: </strong>{character.gender}</p>
                    <p><strong>Status: </strong>{character.status}</p>
                    <p><strong>Especie: </strong>{character.species}</p>
                    <p><strong>Origem: </strong>{character.origin.name}</p>
                    <p><strong>Tipo: </strong>{character.type || "Desconhecido"}</p>
                    <p><strong>Localização: </strong>{character.location.name}</p>
                </div>

                <div className="character-episodes">
                    <h2>Episódios</h2>
                    <ul className="episodes-list">
                        {episodes.map(ep =>( 
                            <li key={ep.id}>
                                <strong className="episode-number">{ep.episode}</strong> - {ep.name} ({new Date(ep.air_date).toLocaleDateString()})
                            </li>
                            
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
        
    );
}

export default CharactersDetails;