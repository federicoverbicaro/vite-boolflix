import { reactive } from "vue";


export const store = reactive ({
    loading: false,
    charactersList: [],
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=725c131ed52f4d1d0420df1e10a14815&language=en-US&sort_by=popularity.desc&include_adult=false&page=1'
})