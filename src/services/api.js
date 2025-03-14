import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (page = 1) => {
    try {
        const response = await axios.get(`${API_URL}/?page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar personagens:", error);
        return null;
    }
};