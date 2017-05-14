import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrent } from '../actions/index';
import Radium from 'radium';

@Radium
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
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.map(this.renderVideos.bind(this))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videoList.videoList }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCurrent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);