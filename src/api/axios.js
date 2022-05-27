import axios from 'axios';

export default axios.create({
    baseURL: 'https://trainrecall-server.herokuapp.com'
})