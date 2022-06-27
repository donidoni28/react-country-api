import axios from "axios";

const BASE_URL = 'https://restcountries.com/v2/all'
export default axios.get({
    baseUrl: BASE_URL,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})