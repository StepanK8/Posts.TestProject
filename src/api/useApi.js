import axios from 'axios'

const api = 'https://jsonplaceholder.typicode.com'
export async function useApi(path) {
    return axios.get(api + path)
}

