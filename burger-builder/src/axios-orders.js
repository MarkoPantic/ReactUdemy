import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e8441.firebaseio.com/'
})

export default instance;