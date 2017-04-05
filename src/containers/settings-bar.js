import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchMethod } from '../actions/index';

class SettingsBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            long: {
                isChecked: true
            },

            short: {
                isChecked: false
            }
        }

        this.setFilter = this.setFilter.bind(this);
    }
    
        setFilter(event){
            if(event.target.id === "long"){
                if(!this.state.long.isChecked){
                    this.setState({short: {isChecked: !this.state.short.isChecked}});
                    this.setState({long: {isChecked: !this.state.long.isChecked}});
                    this.props.setSearchMethod(event.target.id);
                }
            }else if(event.target.id === "short"){
                if(!this.state.short.isChecked){
                    this.setState({short: {isChecked: !this.state.short.isChecked}});
                    this.setState({long: {isChecked: !this.state.long.isChecked}});
                    this.props.setSearchMethod(event.target.id);
                }
            }

        }

    render(){
        return(
            <div className="col-lg-6">
                <div className="input-group">
                    <span className="input-group-addon">
                        <input type="radio" 
                        aria-label="" 
                        name="search-method"
                        id="long" 
                        checked={this.state.long.isChecked} 
                        onChange={this.setFilter.bind(this)}/>
                    </span>
                    <input type="text" 
                    value="Long videos" 
                    className="form-control" 
                    aria-label="Long videos" />
                 </div>
                 <div className="input-group">
                    <span className="input-group-addon">
                        <input type="radio" 
                        aria-label="" 
                        id="short"
                        name="search-method"
                        checked={this.state.short.isChecked}
                        onChange={this.setFilter}/>
                    </span>
                    <input type="text" 
                    value="Short videos" 
                    className="form-control" 
                    aria-label="Short videos" />
                 </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({setSearchMethod}, dispatch);
}

export default connect(null, mapDispatchToProps)(SettingsBar);