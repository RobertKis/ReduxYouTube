import Axios from 'axios';
import YTSearch from 'youtube-api-search';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const SEARCH_METHOD = 'SEARCH_METHOD';
export const CATEGORY_SEARCH = 'CATEGORY_SEARCH';
export const CATEGORY_VALUE = 'CATEGORY_VALUE';
const API_KEY = 'AIzaSyCQOrCyZMNUT9PwPes5AJUyn1kopJm2xU8';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_URL_PLIST = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlists.list'

export function fetchVideos(keyword, duration = 'long', categorySearch, categoryValue) {
  let params;

    params = {
      part: 'snippet',
      key: API_KEY,
      q: keyword,
      type: 'video',
      videoDuration: duration
    }

  if (categorySearch) {
    params["videoCategoryId"] = categoryValue;
  };

  const request = Axios.get(YOUTUBE_URL, { params })
    .then(function (response) {
      return {
        type: FETCH_VIDEOS,
        payload: { receivedList: response }
      }
    });
  return request;
}

export function setCurrent(selectedVideo) {
  return {
    type: SELECT_VIDEO,
    payload: { current: selectedVideo }
  }
}

export function setSearchMethod(selectedMethod) {
  return {
    type: SEARCH_METHOD,
    payload: { videoLength: selectedMethod }
  }
}

export function setCategorySearch(categorySearch) {
  return {
    type: CATEGORY_SEARCH,
    payload: { isChecked: categorySearch }
  }
}

export function setCategoryValue(categoryValue) {
  return {
    type: CATEGORY_VALUE,
    payload: { value: categoryValue }
  }
}
