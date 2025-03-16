import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (page = 1, filters = {}) => {
    try {
        const params = { page };

        // Adiciona filtros à requisição se eles não estiverem vazios
        Object.entries(filters).forEach(([key, value]) => {
            if (value) params[key] = value;
        });

        const response = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar personagens:", error);
        return null;
    }
};

export const getCharacterById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar personagem:", error);
        return null;
    }
};

export const getEpisodeByUrl = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar episódio:", error);
        return null;
    }
};