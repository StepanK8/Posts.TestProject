<template>
    <div class="main">
        <div class="main__search-wrap">
            <SearchApp @search="filterByAuthor"/>
        </div>
        <ul v-if="filteredPosts" class="main__posts">
            <li v-for="(post, idx) in filteredPosts" :key="idx" class="main__post">
                <h2 class="main__post_title">{{post.title}}</h2>
                <p class="main__post_text"> {{post.body}}</p>
                <div class="main__post_author">{{ post.userName }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import { getPosts } from '@/api/getPosts'
import { getUsers } from '@/api/getUsers'
import SearchApp from '@/components/SearchApp.vue'
export default {
    components: {
        SearchApp,
    },
    data(){
        return{
            posts: null,
            users: null,

            filteredPosts: null,
        }
    },
    created() {
        

        getPosts()
        .then(r => {
            this.posts = r
            this.filteredPosts = this.posts
            console.log('posts');
        })
    },
    methods: {
        filterByAuthor(inputValue){
            this.filteredPosts = this.posts.filter(post => {
                console.log(post.userName, inputValue, post.userName.includes(inputValue));
                return post.userName.toLowerCase().includes(inputValue.toLowerCase())
            })
        }
    },
}
</script>
<style lang="scss">
    .main{
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        &__search-wrap{
            margin: 40px 0 10px;
            width: 380px;
        }
        &__posts{   
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px 28px;
            width: 1200px;
        }
        &__post{
            width: 100%;
            padding: 18px;
            background: white;
            border-radius: 2px;
            box-shadow: var(--baseShadow);
            transition: .1s;
            &:hover{
                background: rgb(250, 250, 250); 
            }
            &_title{
                @include baseText(18px);
                color: var(--mainColor);
                &::first-letter{
                    text-transform: uppercase;
                }
            }
            &_text{
                @include baseText(16px);
                margin-top: 10px;
                &::first-letter{
                    text-transform: uppercase;
                }
            }
            &_author{
                @include baseText(14px);
                color: #989898;
                margin-top: 16px;
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .main{
            &__posts{
                grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                width: 100%;
                padding: 0 20px;
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .main{
            &__search-wrap{
                margin: 40px 0 10px;
                width: 100%;
                padding: 0 4vw;
            }
            &__posts{
                grid-template-columns: 1fr;
                padding: 0 4vw;
            }
        } 
    }
</style>