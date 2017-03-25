import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/index';

class SearchBar extends React.Component{
   constructor(props){
       super(props);

       this.state = {term: 'House'};
       this.onSubmitForm = this.onSubmitForm.bind(this);
   }
   
    render(){
        console.log("render SB: " + this.state.term);
        return(
            <form onSubmit={this.onSubmitForm} className="input-group">
                <input id="SearchBar" type="text" 
                placeholder="Enter search term"
                className="form-control"
                value={this.state.term}
                onChange={this.oninputChange.bind(this)}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">submit </button>   
                </span>
            </form>
        );
    }

    oninputChange(event){
        console.log("input change: ")
        this.setState({term: event.target.value});
    }

    onSubmitForm(event){
        event.preventDefault();
        this.props.fetchVideos(this.state.term);
        this.setState({term: ''});
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchVideos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);