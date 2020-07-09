import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default {

    getCards() {
        const url = `${API_URL}/api/cards/`;
        return axios.get(url).then(response => response.data);
    },
    getCardsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    },
    getCard(pk) {
        const url = `${API_URL}/api/cards/${pk}`;
        return axios.get(url).then(response => response.data);
    },
    deleteCard(card){
        const url = `${API_URL}/api/cards/${card.pk}`;
        return axios.delete(url);
    },
    createCard(card){
        const url = `${API_URL}/api/cards/`;
        return axios.post(url,card);
    },
    updateCard(card){
        const url = `${API_URL}/api/cards/${card.pk}`;
        return axios.put(url,card);
    }
}