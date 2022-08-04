import Axios from 'axios'

const headers = {
    'Accept': "*",
    "Content-type": "application/json",
};
const baseURL = 'https://todo.api.devcode.gethired.id/';
export const Request = Axios.create();


export default class baseRequest {
    constructor() {
        this.urls = {};
    }

    async get (url, params) {
        return Request.get(baseURL + url)
    }

    async post (url, params) {
        return Request.post(baseURL + url, params)
    }

    async delete (url) {
        return Request.delete(baseURL + url)
    }

    async put (url, params) {
        return Request.put(baseURL + url, params)
    }

    async custom (config) {
        return  Request.request(config)
    }

}
