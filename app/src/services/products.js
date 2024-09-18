import axios from 'axios'

const baseURL = '/products'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = obj => {
    const request = axios.post(baseURL, obj)
    return request.then(response => response.data)
}

const update = (id, obj) => {
    const request = axios.put(`${baseURL}${id}`, obj) 
    return request.then(response => response.data)
}

export default { getAll, create, update }
