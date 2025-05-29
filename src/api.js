import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: '468208a5'
  }
});

export default api;
