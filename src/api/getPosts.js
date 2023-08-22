import { useApi } from '@/api/useApi.js'
import {getUsers} from '@/api/getUsers'
export async function getPosts() {


return new Promise((resolve, reject) => {
    let posts;
    let users;
    const promises = []

    const p1 = new Promise((resolve) => {
        useApi('/posts')
        .then((r) => {
            posts = r.data
            resolve()
        })
    }) 
    promises.push(p1)

    const p2 = new Promise((resolve) => {
        getUsers()
        .then(r => {
            users = r
            resolve()
        })
    })
    promises.push(p2)


    Promise.all(promises) 
    .then(() => {
        posts = posts.map(post => {
            post.userName = users.find(user => user.id == post.userId).name
            return post
        })
        console.log(posts);
        resolve(posts)
    })
    })
}




