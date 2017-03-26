import { combineReducers } from 'redux';
import VideoList from './video-list-reducer';
import SelectedVideo from './selected-video-reducer';

const rootReducer = combineReducers({
  videoList: VideoList,
  selectedVideo: SelectedVideo
});

export default rootReducer;
