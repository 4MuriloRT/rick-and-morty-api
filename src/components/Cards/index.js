import "./cards.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacters } from "../../services/api";

const Cards = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async (pageNumber) =>{
        const data = await getCharacters(pageNumber);
        if(data){
            setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
            setHasMore(data.info.next !== null)
        }
    };

    useEffect(() =>{
        fetchData(page);
    }, []);

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage);
    };


    return (
        <div>
            <div className="card-container">
                {characters.length > 0 ? (
                    characters.map((char) => (
                        <Link key={char.id} to="/personagem" className="card">
                            <div>
                                <img src={char.image} alt={char.name} />
                                <div className="card-info">
                                    <h3>{char.name}</h3>
                                    <span>{char.species}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
            {
                hasMore && (
                    <button className="load-more-btn" onClick={loadMore}>
                        Carregar Mais
                    </button>
                )
            }
        </div>
    );
};

export default Cards;