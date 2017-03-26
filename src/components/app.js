import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import VideoList from '../containers/video-list';
import CurrentItem from '../containers/current-item';

export default class App extends Component {
  render() {
    console.log("before render");
    return (
      <div>
        <SearchBar />
        <VideoList />
        <CurrentItem />
      </div>
    );
  }
}
