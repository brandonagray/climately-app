import React, { Component } from "react";
import "./MultiDayForecast.scss";
import { getIconClassName } from "../../utils/utils";

class MultiDayForecast extends Component {
  render() {
    const { hours } = this.props.data;

    let accentColor = 0;

    if (hours >= 0 && hours < 6) {
      accentColor = 1;
    } else if (hours >= 6 && hours < 12) {
      accentColor = 2;
    } else if (hours >= 12 && hours < 18) {
      accentColor = 3;
    } else if (hours >= 18 && hours < 24) {
      accentColor = 4;
    }

    const items = this.props.data.map(singleDayData => (
      <SingleListItem
        key={singleDayData.day}
        data={singleDayData}
        accentColor={accentColor}
      />
    ));
    return (
      <div>
        <p className="multiday-forecast-info">6-Day Forecast</p>
        <div className="multiday-forecast-container">{items}</div>
      </div>
    );
  }
}

const SingleListItem = props => {
  const { day, weatherId, description, mainTemp } = props.data;
  const accentColor = props.accentColor;
  const iconClass = getIconClassName(weatherId);
  return (
    <div className={`single-list-item accent-color-${accentColor}`}>
      <div className="li-info-container">
        <div className="li-day">{day}</div>
        <div className="li-temp-text">{mainTemp}&#x00B0;</div>
        <div className="li-desc">{description}</div>
      </div>
      <div className="li-weather-icon">
        <i className={`wi wi-owm-${weatherId} ${iconClass}`}></i>
      </div>
    </div>
  );
};

export default MultiDayForecast;
