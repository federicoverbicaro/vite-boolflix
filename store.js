import { reactive } from "vue";


export const store = reactive ({
    loading: false,
    charactersList: [],
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=725c131ed52f4d1d0420df1e10a14815&query=movie&include_adult=false&language=en-US&page=1'
})