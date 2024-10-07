import axios from 'axios'

const baseURL = '/api/products'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = obj => {
    const request = axios.post(baseURL, obj)
    return request.then(response => response.data)
}

const update = (name, obj) => {
    const request = axios.put(`${baseURL}${name}`, obj) 
    return request.then(response => response.data)
}

const deleteprod = (name) => {
    const req = axios.delete(`${baseURL}/${name}`)
    return req.then(response => response.data)
}

export default { getAll, create, update, deleteprod }
