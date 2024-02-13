<template>
    <div id="container" class="d-flex justify-content-center align-items-center  ">
        <div id="row" class="border border-black rounded-4 ">
            <div class="bg-black p-3 rounded-top-4 ">
                <h1 class="text-center text-uppercase text-danger ">boolflix</h1>
            </div>


            <div class="input-group mb-3 col p-3 ">
                <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-dark text-danger " type="button" id="button-addon2">Button</button>
            </div>

            <div class="p-3">
                <AppCardsFilms/>
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


export default {
    name: 'AppMain',

    components: {
        AppCardsFilms
    },
    data() {


        return {
            store
        }
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
    }
}
</style>