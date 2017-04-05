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
        return(
            <form onSubmit={this.onSubmitForm}>
              <div className="col-lg-10">
                    <div className="input-group">
                        <input type="text" 
                        id="SearchBar" 
                        className="form-control" 
                        placeholder="Search for..."
                        value={this.state.term}
                        onChange={this.oninputChange.bind(this)} />
                        <span>
                            <button className="btn btn-default" type="submit">Go!</button>
                        </span>
                    </div>
               </div>
            </form>
        );
    }

    oninputChange(event){
        this.setState({term: event.target.value});
    }

    onSubmitForm(event){
        event.preventDefault();
        this.props.fetchVideos(this.state.term, this.props.searchMethod);
        this.setState({term: ''});
    }
}

function mapStateToProps(state){
    return {searchMethod: state.searchSettings}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);