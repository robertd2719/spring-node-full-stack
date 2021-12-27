import axios from 'axios';

const taskRoute = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
});

export default taskRoute;
