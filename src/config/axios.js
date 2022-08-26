import axios from 'axios'


export const axiosPublicInstance = axios.create({
    baseURL: 'http://localhost:1337/api',
})