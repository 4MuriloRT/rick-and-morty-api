import "./cards.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacters } from "../../services/api";

const Cards = ({filters}) => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async (pageNumber, filters) => {
        const data = await getCharacters(pageNumber, filters);
        if (data) {
            if (pageNumber === 1) {
                setCharacters(data.results);
            } else {
                setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
            }
            setHasMore(data.info.next !== null);
        }
    };

    useEffect(() =>{
        setPage(1);
        fetchData(1, filters);
    }, [filters]);

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage, filters);
    };


    return (
        <div>
            <div className="card-container">
                {characters.length > 0 ? (
                    characters.map((char) => (
                        <Link key={char.id} to={`/character/${char.id}`} className="card">
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