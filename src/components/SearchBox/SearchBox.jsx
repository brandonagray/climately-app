import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleQueryChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.searchSubmit(this.state.query);
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSearch}>
          <input
            type="search"
            value={this.state.query}
            name="searchBox"
            id="searchBox"
            placeholder="Enter City"
            onChange={this.handleQueryChange}
            style={{borderBottom: `2px solid ${this.props.accentColor}`}}
          />
          <span
            className="search-button fa fa-search"
            onClick={this.handleSearch}
            style={{background: `${this.props.accentColor}`, borderBottom: `1px solid ${this.props.accentColor}`}}
          ></span>
        </form>
      </div>
    );
  }
}

export default SearchBox;
