import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-1213.firebaseio.com/'
});

export default instance;