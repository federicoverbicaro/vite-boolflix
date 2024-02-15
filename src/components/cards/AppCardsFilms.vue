<template>
    <div id="cards">
        <div class="card mt-3 " style="width: 18rem;" @mouseenter="isHovered = true" @mouseleave="isHovered = false">

            <img v-if="!isHovered" :src="'https://image.tmdb.org/t/p/original/' + item.poster_path"
                class="card-img-top rounded-2" alt="...">



                
            <div id="card_text" v-else class="card-body d-flex flex-column bg-black text-white rounded-2 p-4  gap-3 ">
                <h2 class="fs-4 ">Title: <br> {{ item.title }}</h2>
                <h4 class="fs-5 ">Original title: <br> {{ item.original_title }}</h4>
                <span class="fs-6">Vote <br> 
                    <template v-for="star in 5">
                        <i :class="['fa-regular', 'fa-star','text-warning', { 'fas': item.vote_average >= star }]" />
                    </template>
                </span>

                <span>Language <br>
                    <img :src="`https://flagsapi.com/${cambioBandiera(item.original_language).toUpperCase()}/flat/24.png`"
                        width="24" :alt="item.original_language">
                </span>
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
    methods: {
        cambioBandiera(language) {
            switch (language) {
                case 'en':
                    return 'us'
                case 'ja':
                    return 'jp'
                case 'he':
                    return 'il'
                case 'zh':
                    return 'cn'
                case 'ko':
                    return 'kr'
                case 'hi':
                    return 'in'
                default:
                    return language
            }
        },
       
    },

}
// return Math.round((voto / 2))

</script>

<style lang="scss" scoped>
#card_text {
    height: 430px;
}
</style>