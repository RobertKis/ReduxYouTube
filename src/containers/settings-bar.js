import categories from '../category-items';
import Radium from 'radium';
import React from 'react';
import { autobind } from 'core-decorators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSearchMethod, setCategorySearch, setCategoryValue } from '../actions/index';

@connect(
  ({ }) => ({ }),
  dispatch => bindActionCreators({ setSearchMethod, setCategorySearch, setCategoryValue }, dispatch)
)

export default class SettingsBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      long: {
        isChecked: true
      },

      short: {
        isChecked: false
      },

      categorySearch: {
        isChecked: false,
        selectedCategory: 15
      }
    }
  }

  @autobind
  setFilter(event) {
    const { target: { id } } = event;
    const { short, long } = this.state;
    const { setSearchMethod } = this.props;

    if (id) {
      this.setState({ short: { isChecked: !short.isChecked } });
      this.setState({ long: { isChecked: !long.isChecked } });
      setSearchMethod(id);
    }
  }

  @autobind
  setCategorySearch(event) {
    const { categorySearch } = this.state;
    const { setCategorySearch } = this.props;

    this.setState({ categorySearch: { isChecked: !categorySearch.isChecked } });
    setCategorySearch(!categorySearch.isChecked);
  }

 @autobind
  handleSelectList(event) {
    const { target: { value } } = event;
    const { categorySearch } = this.state;
    const { setCategoryValue } = this.props;

    this.setState({
      categorySearch: {
        selectedCategory: value,
        isChecked: categorySearch.isChecked
      }
    })
    setCategoryValue(value);
  }

@autobind
populateSelectList(selectListItem){
  console.log(selectListItem)
  return(
    <option key={selectListItem.id} value={selectListItem.id}>
      {selectListItem.value}
    </option>
  );
}

  render() {
    const {categorySearch, long, short} = this.state;

    return (
      <div id="searchBar" className="col-lg-12">
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox"
              aria-label="..."
              checked={categorySearch.isChecked}
              onChange={this.setCategorySearch} />
          </span>
          <input type="text"
            className="form-control"
            value="Search by category"
            aria-label="Search by category" />
        </div>
        <div id="selectCategory">
          <div className="input-group">
            Category
            <select id="CategorySelectList" value="Select category"
              value={categorySearch.selectedCategory}
              onChange={this.handleSelectList}>   
              {
                categories.map(this.populateSelectList)
              }           
            </select>
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-addon">
            <input type="radio"
              aria-label=""
              name="search-method"
              id="long"
              checked={long.isChecked}
              onChange={this.setFilter} />
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
              checked={short.isChecked}
              onChange={this.setFilter} />
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
