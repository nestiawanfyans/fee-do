import axios from "axios";

export const useApi = () => {
    const baseApi = import.meta.env.VITE_API_URL

    const API = {
        url: '',
        get() {
            return new Promise((resolve, reject) => {
                axios.get(baseApi + this.url)
                    .then((res) => {
                        resolve({
                            data: res.data
                        })
                    }).catch((e) => {
                    reject(e)
                }).finally(() => {
                    this.url = baseApi
                })
            })
        },
        post(data) {
            return new Promise((resolve, reject) => {
                axios.post(baseApi + this.url, data)
                    .then((res) => {
                        resolve(res)
                    }).catch((err) => {
                    reject(err)
                }).finally(() => {
                    this.url = baseApi
                })
            })
        },
        put(id, data) {
            return new Promise((resolve, reject) => {
                axios.put(baseApi + this.url + '/' + id, data)
                    .then((res) => {
                        resolve(res)
                    }).catch((err) => {
                    reject(err)
                }).finally(() => {
                    this.url = baseApi
                })
            })
        },
        delete(id) {
            return new Promise((resolve, reject) => {
                axios.delete(baseApi + this.url + '/' + id)
                    .then((res) => {
                        resolve(res)
                    }).catch((err) => {
                    reject(err)
                }).finally(() => {
                    this.url = baseApi
                })
            })
        },
        path(path) {
            this.url = path
            return this
        }
    }

    return {
        API
    }
}
