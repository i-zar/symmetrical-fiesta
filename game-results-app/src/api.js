import axios from 'axios';

const api = axios.create({
  baseURL: 'http://game-results-app-env.eba-suvm3xvy.eu-central-1.elasticbeanstalk.com/api',
});

export default api;