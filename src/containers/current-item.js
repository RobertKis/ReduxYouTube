import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import { connect } from 'react-redux';

@Radium
@connect(
  ({ selectedVideo, videoList }) => ({
    selectedVideo: selectedVideo.get('current'),
    videoList: videoList.get('receivedList')
  })
)

export default class CurrentItem extends React.Component {

  static propTypes = {
    selectedVideo: RPT.object,
    videoList: RPT.array
  }

  render() {
    const {selectedVideo, videoList} = this.props;
    if (videoList && videoList.length == 0) {
      return <div/>;
    }

    //Show message only if the list is present
    if (!selectedVideo && videoList) {
      return <div style={{ "clear": "both" }}>waiting for video selection</div>;
    }

    const videoId = selectedVideo.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    const title = selectedVideo.title;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={url}></iframe>
        </div>
        <div className="details">
          {title}
        </div>
      </div>
    )
  }
}

