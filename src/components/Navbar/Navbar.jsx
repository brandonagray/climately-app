import React, { Component } from "react";
import SearchBox from "../SearchBox/SearchBox";
import UnitSelect from "../UnitSelect/UnitSelect";
import "./Navbar.css";

class Navbar extends Component {
  sendNewUnitToParent = newUnit => {
    this.props.changeUnit(newUnit);
  };

  sendQueryStringToParent = query => {
    this.props.searchSubmit(query);
  };

  render() {
    return (
      <nav>
        <ul className="navbar-container">
          <li className="navbar-list-item">
            <SearchBox searchSubmit={this.sendQueryStringToParent} accentColor={this.props.accentColor} />
          </li>
          <li className="navbar-list-item city-name">
            <span className="">{this.props.data.city}</span>
          </li>
          <li className="navbar-list-item">
            <UnitSelect
              unit={this.props.unit}
              onUnitChange={this.sendNewUnitToParent}
              accentColor={this.props.accentColor}
            />
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
