import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchMethod, setCategorySearch, setCategoryValue } from '../actions/index';
import { autobind } from 'core-decorators';

class SettingsBar extends React.Component {
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

    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(event) {
    const { target: { id } } = event;
    if (event.target.id === "long") {
      if (!this.state.long.isChecked) {
        this.setState({ short: { isChecked: !this.state.short.isChecked } });
        this.setState({ long: { isChecked: !this.state.long.isChecked } });
        this.props.setSearchMethod(event.target.id);
      }
    } else if (event.target.id === "short") {
      if (!this.state.short.isChecked) {
        this.setState({ short: { isChecked: !this.state.short.isChecked } });
        this.setState({ long: { isChecked: !this.state.long.isChecked } });
        this.props.setSearchMethod(event.target.id);
      }
    }
  }

  @autobind
  setCategorySearch(event) {
    this.setState({ categorySearch: { isChecked: !this.state.categorySearch.isChecked } });
    this.props.setCategorySearch(!this.state.categorySearch.isChecked);
  }

  handleSelectList(event) {
    this.setState({
      categorySearch: {
        selectedCategory: event.target.value,
        isChecked: this.state.categorySearch.isChecked
      }
    })
    console.log(event.target.value);
    this.props.setCategoryValue(event.target.value);
  }

  render() {
    return (
      <div id="searchBar" className="col-lg-12">
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox"
              aria-label="..."
              checked={this.state.categorySearch.isChecked}
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
                            <select value="Select category"
              value={this.state.categorySearch.selectedCategory}
              onChange={this.handleSelectList.bind(this)}>
              <option value="1">Film & Animation</option>
              <option value="2">Autos & Vehicles</option>
              <option value="10">Music</option>
              <option value="15">Pets & Music </option>
              <option value="17">Sports</option>
              <option value="18">Short & Movies</option>
              <option value="19">Travel & Events</option>
              <option value="20">Gaming</option>
              <option value="21">Videoblogging</option>
              <option value="22">People & Blogs</option>
              <option value="23">Comedy</option>
              <option value="24">Entertainment</option>
              <option value="25">News & Politics</option>
              <option value="26">Howto & Style</option>
              <option value="27">Education</option>
              <option value="28">Science & Technology</option>
              <option value="29">Nonprofits & Activism</option>
              <option value="30">Movies</option>
              <option value="31">Anime/Animation</option>
              <option value="32">Action/Adventure</option>
              <option value="33">Classics</option>
              <option value="34">Comedy</option>
              <option value="35">Documentary</option>
              <option value="36">Drama</option>
              <option value="37">Family</option>
              <option value="38">Foreign</option>
              <option value="39">Horror</option>
              <option value="40">Sci-Fi/Fantasy</option>
              <option value="41">Thriller</option>
              <option value="42">Shorts</option>
              <option value="43">Shows</option>
              <option value="44">Trailers</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-addon">
            <input type="radio"
              aria-label=""
              name="search-method"
              id="long"
              checked={this.state.long.isChecked}
              onChange={this.setFilter.bind(this)} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSearchMethod, setCategorySearch, setCategoryValue }, dispatch);
}

export default connect(null, mapDispatchToProps)(SettingsBar);