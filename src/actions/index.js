import Axios from 'axios';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCQOrCyZMNUT9PwPes5AJUyn1kopJm2xU8';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_URL_PLIST = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlists.list'
export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const SEARCH_METHOD = 'SEARCH_METHOD';

export function fetchVideos(keyword, searchMethod){
var params;
    if(searchMethod && searchMethod === "short")
    {
        console.log(1)
        params = {
        part: 'snippet',
        key: API_KEY,
        q: keyword,
        type: 'video',
        videoDuration: 'short'
    }
    }else if(searchMethod && searchMethod === "long")
    {
        params = {
        part: 'snippet',
        key: API_KEY,
        q: keyword,
        videoDuration: 'long',
        type: 'video'
    }
    }else
    {
         console.log(3)
        params = {
        part: 'snippet',
        key: API_KEY,
        q: keyword,
        videoDuration: 'long',
        type: 'video'
    }
    }
    const request = Axios.get(YOUTUBE_URL, {params: params});
        console.log("request")
    console.log(request)
    return{
        type: FETCH_VIDEOS,
        payload: request
    }
}

export function fetchPlaylistItems(id){
    const params = {
        part: 'snippet',
        key: API_KEY,
        q: keyword
    }
    console.log("request")

    const request = Axios.get(YOUTUBE_URL_PLIST, {params: params});

    console.log("request")
    console.log(request)

    return{
        type: FETCH_PLAYLIST,
        payload: request
    }
}

export function setCurrent(selectedVideo){
    return{
        type: SELECT_VIDEO,
        payload: selectedVideo
    }
}

export function setSearchMethod(selectedMethod){
    return{
        type: SEARCH_METHOD,
        payload: selectedMethod
    }
}