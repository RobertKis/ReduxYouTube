import { combineReducers } from 'redux';
import VideoList from './video-list-reducer';
import SelectedVideo from './selected-video-reducer';
import Settings from './settings-reducer';
import CategorySearch from './category-search-reducer';
import CategoryValue from './category-value-reducer';

const rootReducer = combineReducers({
  videoList: VideoList,
  selectedVideo: SelectedVideo,
  searchSettings: Settings,
  categorySearch: CategorySearch,
  categoryValue: CategoryValue
});

export default rootReducer;
