<template>
    <div class="input-group mb-3 col p-3 mt-1 " >

        <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
            aria-describedby="button-addon2" v-model="store.searchText" @keyup.enter="search" >

        <button class="btn btn-dark text-danger " type="button" id="button-addon2" @click="$emit('search')" >Button</button>
    </div>
</template>

<script>
import {store} from '../../store'
export default {
    components: {
        name: ' AppSerchbars'
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