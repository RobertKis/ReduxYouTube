import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrent } from '../actions/index';
import { fetchPlaylistItems } from '../actions/index';

class VideoList extends React.Component {
  renderVideos(VideoItem) {
    return (
      <li key={VideoItem.id.videoId} className="list-group-item">
        <div className="media-left">
          <span>{VideoItem.snippet.title}</span>
          <img src={VideoItem.snippet.thumbnails.default.url}
            onClick={() => this.props.setCurrent(VideoItem)}
            className="media-object" />
        </div>
      </li>
    );
  }

  render() {
    const { videos } = this.props;
    if (this.props.videos.length == 0 && this.props.categorySearch) {
      return <div style={{ "clear": "both" }}>No items to display</div>;
    }
    return (
      <ul className="col-md-4 list-group">
        {videos.map(this.renderVideos.bind(this))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videoList.receivedList, categorySearch: state.categorySearch }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaylistItems, setCurrent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);