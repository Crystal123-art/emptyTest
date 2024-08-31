//for API Requests.

import axios from 'axios';
import { baseURL } from './constants';

const axiosInstance = axios.create({
    baseURL: baseURL,  // Use the baseURL from constants.js
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
