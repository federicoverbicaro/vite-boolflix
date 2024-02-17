<template>
    <div>
        <AppHeader />
    </div>

    <div @search="loadingMovies" id="container" class="d-flex justify-content-center align-items-center ">
        <div id="row" class="border border-4 border-black rounded-4 ">
            <div class="bg-black p-3 rounded-top-3   z-3 ">
                <h1 class="text-center text-uppercase text-danger ">boolflix</h1>
            </div>


            <div>
                <AppSerchbars @search="searchItems" />
            </div>


            <div>

                <div class="text-center text-white text-uppercase">
                    <h5>Films</h5>
                </div>

                <div class="d-flex flex-wrap justify-content-center gap-5 p-3 overflow-auto">

                    <AppCardsFilms v-for="(movie, index) in store.movies" :key="index" :item="movie" />
                </div>

                <div class="text-center text-white text-uppercase mt-3 ">
                    <h5>series tv</h5>
                </div>
                <div class="d-flex flex-wrap justify-content-center gap-5 p-3 overflow-auto">

                    <AppCardsFilms v-for="(series, index) in store.series" :key="index" :item="series" />
                </div>
            </div>



        </div>
    </div>
</template>

<script>


// importazione file store.js
import { store } from '../../store'

// importazione  axisos
import axios from 'axios'

import AppHeader from '../components/header/AppHeader.vue';
import AppCardsFilms from '../components/cards/AppCardsFilms.vue';
import AppSerchbars from '../components/AppSerchbars.vue';

export default {
    name: 'AppMain',

    components: {
        AppCardsFilms,
        AppSerchbars,
        AppHeader,

    },

    data() {
        return {
            store,
        }
    },
    methods: {
        searchItems() {

            axios.get(`${store.apiMovies}?api_key=${store.api_key}&query=${this.store.searchText}`)
                .then((res) => {

                    this.store.movies = res.data.results;
                })
                .catch((error) => {
                    console.error('Errore nel recupero dei film:', error);
                });


            axios.get(`${store.apiSeries}?api_key=${store.api_key}&query=${this.store.searchText}`)
                .then((res) => {

                    this.store.series = res.data.results;
                })
                .catch((error) => {
                    console.error('Errore nel recupero delle serie TV:', error);
                });
        },

        loadingMovies() {

            axios.get(`${store.apiDomMovies}?api_key=${store.api_key}&query="${store.searchTextDom}&page=20`)
                .then((res) => {
                    console.log('Risultati API Movies:', res.data.results)
                    this.store.movies = res.data.results;
                })
                .catch((error) => {
                    console.error('Errore nel recupero dei film:', error);
                });
        },

        search() {
            this.$emit('search', this.serachText);
            this.$emit('ricercaInDom', this.searchTextDom);
        },

    },
    mounted() {

       this.loadingMovies();


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