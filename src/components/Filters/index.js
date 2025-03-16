import "./filters.css"
import { useState } from "react";

const Filters = ({ onFilterChange }) =>{
    const [filters, setFilters] = useState({
        name: "",
        species: "",
        gender: "",
        status: "",
    });

    const handleChange = (e) =>{
        const { id, value } = e.target;
        const newFilters = {...filters, [id]:value};
        setFilters(newFilters);
        onFilterChange(newFilters);
    }

    return(
        <div className="filters-container">
            <input 
                type="text"
                id="name" 
                placeholder="Buscar por nome..." 
                className="input-field" 
                value={filters.name}
                onChange={handleChange}
            />
            
            <select className="select-field" id="species" value={filters.species} onChange={handleChange}>
                <option value="" default> Especie </option>
                <option value="animal">Animal</option>
                <option value="alien">Alien</option>
                <option value="disease">Doença</option>
                <option value="unknown">Desconhecido</option>
                <option value="human">Humano</option>
                <option value="humanoid">Humanoide</option>
                <option value="mythological">Mitologico</option>
                <option value="poopybutthole">Poopybutthole</option>
                <option value="robot">Robo</option>
            </select>

            <select className="select-field" id="gender" value={filters.gender} onChange={handleChange}>
                <option value="" default> Genero </option>
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
                <option value="genderless">Sem Genero</option>
                <option value="unknown">Desconhecido</option>
            </select>

            <select className="select-field" id="status" value={filters.status} onChange={handleChange}>
                <option value="" default>Estatus</option>
                <option value="alive">Vivo</option>
                <option value="dead">Morto</option>
                <option value="unknown">Desconhecido</option>
            </select>
        </div>
    );
}

export default Filters;