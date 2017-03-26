import React from 'react';
import { connect } from 'react-redux';

class CurrentItem extends React.Component{
    render(){
        if(!this.props.selectedVideo){
		    return <div>Loading...</div>;
	    }

        const videoId = this.props.selectedVideo.id.videoId;
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
    console.log("map: ");
    console.log(state.selectedVideo);

    return {selectedVideo: state.selectedVideo}
}

export default connect(mapStateToProps)(CurrentItem);