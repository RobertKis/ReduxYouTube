import {SEARCH_METHOD, CATEGORY_SEARCH, CATEGORY_VALUE, FETCH_VIDEOS} from '../index';
import { setSearchMethod, setCategorySearch, setCategoryValue, fetchVideos } from '../index';

it('test video length settings', () => {
    expect(setSearchMethod('long')).toEqual({type: SEARCH_METHOD, payload: {videoLength: 'long'}})
});

it('test video length settings', () => {
    expect(setSearchMethod('short')).toEqual({type: SEARCH_METHOD, payload: {videoLength: 'short'}})
});

it('test if category is set', () => {
    expect(setCategorySearch(false)).toEqual({type: CATEGORY_SEARCH, payload: {isChecked: false}})
});

it('test if category is set', () => {
    expect(setCategorySearch(true)).toEqual({type: CATEGORY_VALUE, payload: {isChecked: true}})
});

it('test category value', () => {
    expect(setCategoryValue('Movie')).toEqual({type: CATEGORY_VALUE, payload: {value: 'Movie'}})
});

