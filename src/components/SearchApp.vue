<template>
    <div class="search">
        <button @click="search" class="search__button">
            <img src="@/assets/search.svg" alt="">
        </button>
        <input @keypress.enter="search" v-model="inputValue" class="search__input" placeholder="Filter by author..."/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputValue: null,
        }
    },
    methods: {
        search(){
            this.$emit('search', this.inputValue.trim())
        },
    },
}
</script>
<style lang="scss">
    .search{
        height: 40px;
        width: 100%;
        display: flex;
        background: white;
        box-shadow: var(--baseShadow);
        &__button{
            border-right: 2px solid rgba(0, 0, 0, 0.08);
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            cursor: pointer;
            transition: .1s;
            &:hover{
                background: #f4f4f4;
            }
            & > img{
                width: 25px;
                object-fit: contain;
                opacity: 0.3;
            }
        }
        &__input{
            width: 100%;
            font-size: 16px;
            padding-left: 14px;
            &::placeholder{
                color: rgba(153, 153, 153, 0.988);
            }
        }
    }
</style>