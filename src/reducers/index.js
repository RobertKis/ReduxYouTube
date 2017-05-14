import { combineReducers } from 'redux';
import VideoList from './video-list-reducer';
import SelectedVideo from './selected-video-reducer';
import Settings from './settings-reducer';
import category from './category';

const rootReducer = combineReducers({
  videoList: VideoList,
  selectedVideo: SelectedVideo,
  searchSettings: Settings,
  category
});

export default rootReducer;
