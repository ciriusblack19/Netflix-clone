const API_KEY = '971bf13eb79ef50b9e4944b8b834fc2e';
const API_BASE = 'https://api.themoviedb.org/3';


// Get the info
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originali Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=it-IT&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Raccomandati per te',
                items: await basicFetch(`/trending/all/week?language=it-IT&api_key=${API_KEY}`)
            },
            {
                slug: 'serie',
                title: 'I titoli del momento',
                items: await basicFetch(`/movie/top_rated?language=it-IT&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Azione',
                items: await basicFetch(`/discover/movie?with_genres=28&anguage=it-IT&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Commedie',
                items: await basicFetch(`/discover/movie?with_genres=35&anguage=it-IT&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&anguage=it-IT&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romantici',
                items: await basicFetch(`/discover/movie?with_genres=10749&anguage=it-IT&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentari',
                items: await basicFetch(`/discover/movie?with_genres=99&anguage=it-IT&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=it-IT&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=it-IT&api_key=${API_KEY}`);
                break;
                default:
                    info=null;
                break;
            }
        }

        return info;
    }
}