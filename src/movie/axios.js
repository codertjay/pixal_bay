const API_KEY = "47c327e36c678c127c820f420ec1b127"


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US` ,
    fetchNetflixOriginals: `/trending/all/week?api_key=${API_KEY}&with_networks=213` ,
    fetchTopRated: `/trending/top_rated/week?api_key=${API_KEY}&language=en=US` ,
    fetchActionMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=28` ,
    fetchComedyMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=35` ,
    fetchHorrorMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=27` ,
    fetchRomanceMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=1079` ,
    fetchDocumentaries: `/discover/movie/week?api_key=${API_KEY}&with_genres=99` ,
}

export default requests