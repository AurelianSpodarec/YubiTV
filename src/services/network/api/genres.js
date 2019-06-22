import config from './config';
import { getRequest } from './../requests/getRequest';

const getMovieNameList = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.apiKey}&language=en-US`, getRequest())
    return await res.json();
}

const getTVNameList = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${config.apiKey}&language=en-US`, getRequest())
    return await res.json();
}

export {
    getMovieNameList,
    getTVNameList
}

