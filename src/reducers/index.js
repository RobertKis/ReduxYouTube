import { combineReducers } from 'redux';
import VideoList from './video-list-reducer';
import SelectedVideo from './selected-video-reducer';
import Settings from './settings-reducer';

const rootReducer = combineReducers({
  videoList: VideoList,
  selectedVideo: SelectedVideo,
  searchSettings: Settings
});

export default rootReducer;
