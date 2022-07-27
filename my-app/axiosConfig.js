import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.trello.com/1/',
});

export default instance;