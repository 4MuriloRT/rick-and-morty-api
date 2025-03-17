import "./filterlocation.css";
import { useState, useEffect } from "react";
import { getAllLocations } from "../../services/api";

const FilterLocation = ({ onFilterChange }) => {
    const [filter, setFilter] = useState({
        name: "",
        type: "",
        dimension: "",
    });

    const [types, setTypes] = useState([]);
    const [dimensions, setDimensions] = useState([]);

    useEffect(() => {
        const fetchFilters = async () => {
            const allLocations = await getAllLocations(); // Busca todas as páginas da API
            if (allLocations) {
                // Extrai os valores únicos de "type" e "dimension"
                const uniqueTypes = [...new Set(allLocations.map((loc) => loc.type).filter(Boolean))];
                const uniqueDimensions = [...new Set(allLocations.map((loc) => loc.dimension).filter(Boolean))];

                setTypes(uniqueTypes);
                setDimensions(uniqueDimensions);
            }
        };
        fetchFilters();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...filter, [name]: value };
        setFilter(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="filter-container">
            <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Buscar por nome..."
                value={filter.name}
                onChange={handleChange}
            />

            <select className="select-field" name="type" value={filter.type} onChange={handleChange}>
                <option value="">Todos os Tipos</option>
                {types.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
            </select>

            <select className="select-field" name="dimension" value={filter.dimension} onChange={handleChange}>
                <option value="">Todas as Dimensões</option>
                {dimensions.map((dimension, index) => (
                    <option key={index} value={dimension}>
                        {dimension}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterLocation;