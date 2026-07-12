import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-cms-backend-ubc8.onrender.com/api',
});

export default api