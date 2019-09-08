import axios from 'axios';
import { API_HOST } from '../../env';

const api = axios.create({
    baseURL: API_HOST
});

export default api;