import { useApi } from '@/api/useApi.js'

export async function getPosts() {
    return new Promise((resolve, reject) => {
        let data;
        useApi('/posts')
        .then((r) => {
            data = r.data
            resolve(data)
        })

    })
}


