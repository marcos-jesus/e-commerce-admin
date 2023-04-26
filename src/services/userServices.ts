import axios from 'axios'

export function userService() {

    const api = axios.create({
        baseURL: 'localhost:3305/'
    })


    function getData(endpoint) {
        return api.get(endpoint)
    }

    function postData(endpoint, data) {

        return api.post(endpoint, data)
    }

    return {

        postData
    }
}

