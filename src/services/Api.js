import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: 'https://alphafx-code-test-api.herokuapp.com/',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}