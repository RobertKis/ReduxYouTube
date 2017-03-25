import { combineReducers } from 'redux';
import VideoList from './video-list-reducer';

const rootReducer = combineReducers({
  videoList: VideoList
});

export default rootReducer;
