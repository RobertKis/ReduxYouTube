import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/index';
import Radium from 'radium';

@Radium
@connect(
  ({ category, searchSettings }) => ({
    categoryValue: category.get('value'),
    isChecked: category.get('isChecked'),
    searchMethod: searchSettings.get('videoLength')
  }),
  dispatch => bindActionCreators({ fetchVideos }, dispatch)
)

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  oninputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { fetchVideos, searchMethod, isChecked, categoryValue } = this.props;
    const { term } = this.state;
    console.log("searchmethod")
    console.log(searchMethod)
    fetchVideos(term, searchMethod, isChecked, categoryValue);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="col-lg-10">
          <div className="input-group">
            <input type="text"
              id="SearchBar"
              className="form-control"
              placeholder="Search for..."
              value={this.state.term}
              onChange={this.oninputChange.bind(this)} />
            <span style={styles.submitButton}>
              <button className="btn btn-default" type="submit">Go!</button>
            </span>
          </div>
        </div>
      </form>
    );
  }
}

const styles = {
  submitButton: {
    background: 'red',
    ':hover': {
      background: 'green !important'
    },
    '@media (minWidth: 500px)': {
      background: 'purple !important'
    }
  }
}