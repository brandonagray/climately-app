import React, { Component } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import "./Graph.css";

class Graph extends Component {
  render() {
    return (
      <div className="graph-container">     
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
