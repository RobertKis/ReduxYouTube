import Axios from 'axios';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCQOrCyZMNUT9PwPes5AJUyn1kopJm2xU8';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
export const FETCH_VIDEOS = 'FETCH_VIDEOS';

export function fetchVideos(keyword){
    const params = {
        part: 'snippet',
        key: API_KEY,
        q: keyword
    };

    const request = Axios.get(YOUTUBE_URL, {params: params});
    console.log("request: " + request);
    return{
        type: FETCH_VIDEOS,
        payload: request
    }
}