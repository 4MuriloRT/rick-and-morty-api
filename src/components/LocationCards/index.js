import "./locationcards.css"
import { useState, useEffect } from "react";
import { getLocations } from "../../services/api"
import { Link } from "react-router-dom";
const LocationCards = ({ filters }) =>{
    const [locations, setLocations ] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchLocations = async () => {
            setLocations([]);
            setPage(1);
            const data = await getLocations(1, filters);
            if(data){
                setLocations(data.results);
                setHasMore(data.info.next !== null);
            }
        };
        fetchLocations();
    }, [filters]);


    const loadMore = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        const data = await getLocations(nextPage, filters);
        if(data){
            setLocations((prev) => [...prev,...data.results]);
            setHasMore(data.info.next !== null);
        }
    }

    return(
        <div>
            <div className="location-container">
                {locations.length > 0 ? (
                    locations.map((loc) => (
                        <Link to={`/location/${loc.id}`} key={loc.id} className="location-card">
                            <div>
                                <h3>{loc.name}</h3>
                                <p>Tipo: {loc.type}</p>
                                <p>Dimensão: {loc.dimension}</p>
                            </div>    
                        </Link> 
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
            {hasMore && (
                <button className="load-more-btn" onClick={loadMore}>
                    Carregar Mais
                </button>
            )}
        </div>
    );
};

export default LocationCards;
