import { useApi } from '@/api/useApi.js'

export async function getUsers() {
    return new Promise((resolve, reject) => {
        let data;
        useApi('/users')
            .then((r) => {
                data = r.data
                resolve(data)
            })

    })
}


