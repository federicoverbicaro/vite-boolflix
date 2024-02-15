<template>
    
        <nav class=" bg-black p-3 d-flex flex-row justify-content-between ">

            <nav class="navbar navbar-dark ">
                <div class="col-3">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            
           

            <div class="text-danger d-flex fs-4 gap-2">

                <button class="text-danger bg-black border-0 text-capitalize  " type="button" @click="search('films')">films</button>

                <button class="text-danger bg-black border-0 text-capitalize " type="button" @click="search('series')">series</button>

            </div>
        </nav>
</template>

<script>

import {store} from '../../../store'
export default {
    components: {
        name: 'AppHeader'
    },

    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            this.$emit('search', this.searchText);
        },
        
    }
}
</script>

<style lang="scss" scoped></style>