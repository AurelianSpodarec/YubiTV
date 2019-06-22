import config from './../config';
import { getRequest } from '../requests/getRequest';

const getLatest = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${config.apiKey}&language=en-US`, getRequest())
    return await res.json();
}

const getAiringToday = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${config.apiKey}&language=en-US&page=1`, getRequest())
    return await res.json();
}

const getOnTheAir = async () => {
    const res = await fetch (`https://api.themoviedb.org/3/tv/on_the_air?api_key=${config.apiKey}&language=en-US&page=1`, getRequest())
    return await res.json();
}

const getPopular = async () => {
    const res = await fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${config.apiKey}&language=en-US&page=1`, getRequest())
    return await res.json();
}

const getTopRated = async () => {
    const res = await fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${config.apiKey}&language=en-US&page=1`, getRequest())
    return await res.json();
}

export {
    getLatest,
    getOnTheAir,
    getAiringToday,
    getPopular,
    getTopRated
}