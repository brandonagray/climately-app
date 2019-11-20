import React, { Component } from "react";
import "./UnitSelect.css";

class UnitSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "C"
    };
  }

  changeUnit = e => {
    const newUnit = e.target.textContent;
    this.props.onUnitChange(newUnit);
  };

  render() {
    return (
      <div className="unit-container">
        <span
          className={`unit-value ${
            this.props.unit === "C" ? "active-unit" : ""
          }`}
          style={{
            borderBottom:
              this.props.unit === "C"
                ? `1px solid ${this.props.accentColor}`
                : "none",
            background:
              this.props.unit === "C"
                ? `${this.props.accentColor}`
                : "transparent"
          }}
          onClick={this.changeUnit}
        >
          C
        </span>
        <span
          className={`unit-value ${
            this.props.unit === "F" ? "active-unit" : ""
          }`}
          style={{
            borderBottom:
              this.props.unit === "F"
                ? `1px solid ${this.props.accentColor}`
                : "none",
            background:
              this.props.unit === "F"
                ? `${this.props.accentColor}`
                : "transparent"
          }}
          onClick={this.changeUnit}
        >
          F
        </span>
      </div>
    );
  }
}

export default UnitSelect;
