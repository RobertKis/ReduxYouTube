import PropTypes from 'prop-types';
import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrent } from '../actions/index';
import { fetchPlaylistItems } from '../actions/index';

@connect(
  ({ videoList }) => ({
    videos: videoList.get('receivedList')
  }),
  dispatch => bindActionCreators({ fetchPlaylistItems, setCurrent }, dispatch)
)

export default class VideoList extends React.Component {

  @autobind
  renderVideos(VideoItem) {
    const { setCurrent } = this.props;

    return (
      <li key={VideoItem.id.videoId} className="list-group-item">
        <div className="media-left">
          <span>{VideoItem.snippet.title}</span>
          <img src={VideoItem.snippet.thumbnails.default.url}
            onClick={() => setCurrent(VideoItem)}
            className="media-object" />
        </div>
      </li>
    );
  }

  render() {
    const { videos } = this.props;
    if (videos && videos.length === 0) {
      return <div style={{ "clear": "both" }}>No items to display</div>;
    }
    return (
      <ul className="col-md-4 list-group">
        {videos.map(this.renderVideos)}
      </ul>
    );
  }
}

VideoList.propTypes = {
  VideoItem: PropTypes.object,
  videos: PropTypes.array
};

