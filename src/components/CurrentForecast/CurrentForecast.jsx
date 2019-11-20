import React, { Component } from "react";
import "./CurrentForecast.scss";
import { getIconClassName } from "../../utils/utils";
var moment = require("moment-timezone");

class CurrentForecast extends Component {
  render() {
    const {
      day,
      date,
      weatherId,
      description,
      mainTemp,
      minTemp,
      maxTemp,
      pressure,
      humidity,
      windSpeed,
      hours,
      localTime,
      timezoneId,
    } = this.props.data;
    const { unit } = this.props;
    const iconClass = getIconClassName(weatherId);
    const windSpeedUnit = unit === "C" ? "m/s" : "miles/hr";
    
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

    return (
      <div>
        <div className="current-forecast-container">
          <div className="date-container">
            <div className="time-container">
              {localTime ? moment.tz(localTime, timezoneId).format("h:mm A") : null}
            </div>
            <div>{day}</div>
            <div>{date}</div>
          </div>

          <div className="icon-desc-container">
            <div className="icon-conatainer">
              <i
                className={`wi wi-owm-${weatherId} weather-icon ${iconClass}`}
              ></i>
            </div>
            <div className="weather-desc">{description}</div>
          </div>

          <div className="temp-container">
            <div className="temp-text">
              <span>{mainTemp}</span>
              <i className="wi wi-degrees"></i>
            </div>
            <div className="high-low-container">
              <div className={`high-low-item accent-color-${accentColor}`}>
                <span>
                  <i className="wi wi-direction-up"></i>
                </span>
                <span>Max</span>
                <span>
                  <span>{maxTemp}&#x00B0;</span>
                </span>
              </div>
              <div className={`high-low-item accent-color-${accentColor}`}>
                <span>
                  <i className="wi wi-direction-down"></i>
                </span>
                <span>Min</span>
                <span>
                  <span>{minTemp}&#x00B0;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="extra-info-container">
          <div className={`extra-info-item  accent-color-${accentColor}`}>
            <span>
              <i className="wi wi-humidity"></i>
            </span>
            <span>Humidity:</span>
            <span>{humidity}%</span>
          </div>
          <div className={`extra-info-item  accent-color-${accentColor}`}>
            <span>
              <i className="wi wi-barometer"></i>
            </span>
            <span>Pressure:</span>
            <span>{pressure} hPa</span>
          </div>
          <div className={`extra-info-item  accent-color-${accentColor}`}>
            <span>
              <i className="wi wi-strong-wind"></i>
            </span>
            <span>Wind:</span>
            <span>
              {windSpeed} {windSpeedUnit}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentForecast;
