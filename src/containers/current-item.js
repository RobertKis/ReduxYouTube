import React from 'react';
import { connect } from 'react-redux';

class CurrentItem extends React.Component{
    render(){
        if(this.props.videoList.length == 0){
            return <div></div>;
        }
        if(!this.props.selectedVideo && this.props.videoList){
            return <div style={{"clear": "both"}}>waiting for video selection</div>;
	    }

        var videoId;

        videoId = this.props.selectedVideo.id.videoId;
        const url = 'https://www.youtube.com/embed/' + videoId;
        const title = this.props.selectedVideo.title; 

        return(
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

function mapStateToProps(state){
    return {selectedVideo: state.selectedVideo, 
            videoList: state.videoList,
            searchMethod: state.searchSettings}
}

export default connect(mapStateToProps)(CurrentItem);