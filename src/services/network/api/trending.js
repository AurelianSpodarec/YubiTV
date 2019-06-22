import config from './../config';
import { getRequest } from '../requests/getRequest';

const getTrending = async (type = 'all', time = 'day') => {

    const types = {
        all: 'all',
        movie: 'movie',
        tv: 'tv',
        person: 'person' 
    }

    const times = { 
        day: 'day',
        week: 'week'
    }

    if(!types[type]) return console.error(`API Trending: Type of '${type}' doesn't exist - you likely did a typing mistake or the category doesn't exist`)
    if(!times[time]) return console.error(`API Trending: Type of '${time}' doesn't exist - you likely did a typing mistake or the time doesn't exist`)

    const res = await fetch(`https://api.themoviedb.org/3/trending/${types[type]}/${times[time]}?api_key=${config.apiKey}`, getRequest())
    
    return await res.json();
    
}

export {
    getTrending,
}