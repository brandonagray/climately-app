import React, { Component } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import "./Graph.scss";

class Graph extends Component {
  render() {
    return (
      <div className="graph-container">
        <p className="graph-info">6-Day Trend</p>    
        <div className="graph">
          <Sparklines data={this.props.data} height={50}>
            <SparklinesLine color={this.props.accentColor} />
            <SparklinesSpots style={{ fill: "#ffffff" }} />
          </Sparklines>
        </div>
      </div>
    );
  }
}

export default Graph;
