import { reactive } from "vue";


export const store = reactive ({
    searchText: '',
    loading: false,
    movies: [],
    series:[],
    api_key:'725c131ed52f4d1d0420df1e10a14815',
    apiMovies: 'https://api.themoviedb.org/3/search/movie',
    apiSeries: 'https://api.themoviedb.org/3/search/tv',
   
})