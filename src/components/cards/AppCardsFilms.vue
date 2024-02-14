<template>
    <div id="cards">
        <div class="card mt-3 " style="width: 18rem;" @mouseenter="isHovered = true" @mouseleave="isHovered = false">

            <img v-if="!isHovered" :src="'https://image.tmdb.org/t/p/original/' + item.poster_path" class="card-img-top rounded-2" alt="..." >
          

            <div id="card_text" v-else class="card-body">
                <h2>{{ item.title }}</h2>
                <h4>{{ item.original_title }}</h4>
                <span>{{ item.vote_average }}</span>
            </div>
        </div>
        
    </div>

   
 
</template>

<script>
export default {
    components: {
        name: 'AppCardsFilms'

    },
    props: [
        'item'
    ],

    data() {

        return {
            isHovered: false
        }
    },

}
</script>

<style lang="scss" scoped>
#card_text{
    height: 430px;
}

</style>