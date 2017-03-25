import React from 'react';
import { connect } from 'react-redux';

class VideoList extends React.Component{
    renderVideos(VideoItem){
        return(
            <tr>
                <td>{VideoItem.snippet.title}</td>
            </tr>
        );
    }
    render(){
        console.log(this.props.videos)
        return(
            <div>
                 {this.props.videos.map(this.renderVideos)}
            </div>
        );
    }   
} 

function mapStateToProps(state){
    console.log("map: " + state.videoList);
    return {videos: state.videoList}
}

export default connect(mapStateToProps)(VideoList);