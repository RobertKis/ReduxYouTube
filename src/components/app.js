import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import VideoList from '../containers/video-list';
import CurrentItem from '../containers/current-item';
import SettingsBar from '../containers/settings-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SettingsBar />
        <SearchBar />
        <VideoList />
        <CurrentItem />
      </div>
    );
  }
}
