<template>
    <div id="container" class="d-flex justify-content-center align-items-center ">
        <div id="row" class="border border-black rounded-4 ">
            <div class="bg-black p-3 rounded-top-4   z-3 ">
                <h1 class="text-center text-uppercase text-danger ">boolflix</h1>
            </div>


            <div>
                <AppSerchbars @search="getApi" />
            </div>


            <div class="d-flex flex-wrap justify-content-center gap-5 p-3 overflow-auto">
                <AppCardsFilms v-for="(element, index) in store.movies" :key="index" :propsSrc="element.poster_path"
                    :propsTitolo="element.title" :propsOriginalsTitle="element.original_title"
                    :propsVoto="element.vote_average" />
            </div>

        </div>
    </div>
</template>

<script>


// importazione file store.js
import { store } from '../../store'

// importazione  axisos
import axios from 'axios'


import AppCardsFilms from '../components/cards/AppCardsFilms.vue';
import AppSerchbars from '../components/AppSerchbars.vue';

export default {
    name: 'AppMain',

    components: {
        AppCardsFilms,
        AppSerchbars,

    },
    data() {
        return {
            store
        }
    },
    methods: {

        getApi() {

            axios.get(`${store.apiMovies}?api_Key=${store.api_key}&query=${store.searchtext}`)
                .then((res) => {
                    console.log(res.data.results)

                    store.movies = res.data.results

                })
        },
       
    },
    mounted() {
        this.getApi();
    }
}
</script>

<style lang="scss" scoped>
#container {
    background: black;
    background: linear-gradient(180deg, rgba(232, 7, 7, 1) 20%, rgba(0, 0, 0, 1) 50%, rgba(255, 0, 0, 1) 80%);
    height: 100vh;


    #row {
        height: 80vh;
        width: 80%;
        margin: 0 auto;
        position: relative;
        overflow-y: scroll;
    }
}
</style>