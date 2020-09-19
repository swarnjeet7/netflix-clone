const API_KEY = '5f0cea48c25a0535147799dd8ad35d04';
const Config = {
    "orignal": `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    "trending": `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
    "top": `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    "action": `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    "comedy": `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    "horror": `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    "romance": `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    "documentaries": `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,

    "base_url": "https://image.tmdb.org/t/p/original/",
    "genres": [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        }
    ]
}

export default Config;