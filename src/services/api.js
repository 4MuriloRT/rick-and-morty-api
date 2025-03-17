import axios from "axios";

const API_CHARACTERS_URL = "https://rickandmortyapi.com/api/character";
const API_LOCATIONS_URL = "https://rickandmortyapi.com/api/location";

export const getLocations = async (page = 1, filters = {}) => {
    try {
        const params = { page, ...filters };

        const response = await axios.get(API_LOCATIONS_URL, { params });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar localizações:", error);
        return null;
    }
};

export const getAllLocations = async () => {
    let allLocations = [];
    let nextPage = `${API_LOCATIONS_URL}?page=1`;

    try {
        while (nextPage) {
            const response = await axios.get(nextPage);
            allLocations = [...allLocations, ...response.data.results];
            nextPage = response.data.info.next; // Atualiza a próxima página
        }
    } catch (error) {
        console.error("Erro ao buscar todas as localizações:", error);
    }

    return allLocations;
};

export const getCharacters = async (page = 1, filters = {}) => {
    try {
        const params = { page, ...filters };

        const response = await axios.get(API_CHARACTERS_URL, { params });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar personagens:", error);
        return null;
    }
};

export const getCharacterById = async (id) => {
    try {
        const response = await axios.get(`${API_CHARACTERS_URL}/${id}`);
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