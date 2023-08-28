import { useApi } from '@/api/useApi.js'
import {getUsers} from '@/api/getUsers'
import {getPosts} from '@/api/getPosts'
export async function getPostsWithAuthors() {


return new Promise((resolve, reject) => {
    Promise.all([getUsers(), getPosts()]) 
    .then(([users, posts]) => {
        posts = posts.map(post => {
            post.userName = users.find(user => user.id == post.userId).name
            return post
        })
        // console.log(posts);
        resolve(posts)
    })
    })
}




