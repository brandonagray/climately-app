import React, { Component } from "react";
import axios from "axios";
import Slider from 'infinite-react-carousel';
import Navbar from "../Navbar/Navbar";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import MultiDayForecast from "../MultiDayForecast/MultiDayForecast";
import Graph from "../Graph/Graph";
import "./App.scss";

var moment = require("moment-timezone");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "C",
      queryString: "",
      latLng: [],
      accentColor: "transparent",
      navbarData: {},
      currentForecastData: {},
      locationTimezoneData: {},
      multiDayForecastData: [],
      graphData: []
    };
  }

  componentDidMount() {
    const geolocation = navigator.geolocation;

    // If allowed...
    if (geolocation) {
      const permissionGranted = position => {
        this.setState(
          {
            latLng: [position.coords.latitude, position.coords.longitude]
          },
          this.notifyStateChange
        );
      };

      const permissionDenied = () => {
        console.log("Permission Denied");
      };

      geolocation.getCurrentPosition(permissionGranted, permissionDenied);
    } else {
      console.log("GeoLocation not supported...");
    }
  }

  onUnitChange = newUnit => {
    this.setState(
      {
        unit: newUnit
      },
      this.notifyStateChange
    );
  };

  onSearchSubmit = query => {
    this.setState(
      {
        queryString: query,
        latLng: []
      },
      this.notifyStateChange
    );
  };

  notifyStateChange = () => {
    const hasLatLng = this.state.latLng.length > 0;
    const hasCityOrZipcode = this.state.queryString !== "";

    if (hasLatLng || hasCityOrZipcode) {
      this.fetchCurrentForecast(hasLatLng)
        .then(currentData => {
          const navbarData = this.extractDataForNavbar(currentData);
          const currentForecastData = this.extractDataForCurrentForecast(
            currentData
          );

          this.fetchLocationTime(
            currentForecastData.coords,
            currentForecastData.timestamp
          );

          this.setState({
            navbarData,
            currentForecastData
          });
        })
        .catch(error => {
          console.log("Error:", error);
        });

      this.fetchDailyWeatherForecast(hasLatLng)
        .then(forecastData => {
          const {
            multiDayForecastData,
            graphData
          } = this.extractDataForMultiDayAndGraphComponents(forecastData);

          this.setState({
            multiDayForecastData,
            graphData
          });
        })
        .catch(error => {
          console.log("Error:", error);
        });
    }
  };

  fetchCurrentForecast = hasLatLng => {
    const API_KEY = "e936cc62b3f22eb537ef8c1e231de24f";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    const queryParams = hasLatLng
      ? `lat=${this.state.latLng[0]}&lon=${this.state.latLng[1]}`
      : `q=${this.state.queryString}`;
    const unitType = this.state.unit === "C" ? "metric" : "imperial";

    const url = `${BASE_URL}?${queryParams}&units=${unitType}&cnt=7&appid=${API_KEY}`;

    return axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  };

  fetchDailyWeatherForecast = hasLatLng => {
    const API_KEY = "e936cc62b3f22eb537ef8c1e231de24f";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
    const queryParams = hasLatLng
      ? `lat=${this.state.latLng[0]}&lon=${this.state.latLng[1]}`
      : `q=${this.state.queryString}`;
    const unitType = this.state.unit === "C" ? "metric" : "imperial";

    const url = `${BASE_URL}?${queryParams}&units=${unitType}&cnt=7&appid=${API_KEY}`;

    return axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  };

  fetchLocationTime = (coords, timestamp) => {
    const API_KEY = "AIzaSyAxc2CKDD9g8c9Wxgryv_7RTvddmkEEd1U";
    const BASE_URL = "https://maps.googleapis.com/maps/api/timezone/json";

    const url = `${BASE_URL}?location=${coords.lat},${coords.lon}&timestamp=${timestamp}&key=${API_KEY}`;

    return axios
      .get(url)
      .then(response => {
        const locationTimezoneData = this.extractDataForTimezone(response.data);

        this.setState({
          locationTimezoneData
        });
      })
      .catch(error => {
        console.log("Error:", error);
      });
  };

  extractDataForNavbar = currentData => {
    return {
      city: `${currentData.name}, ${currentData.sys.country}`
    };
  };

  extractDataForTimezone = locationTimezoneData => {
    const timezoneId = locationTimezoneData.timeZoneId;

    let timestamp = new Date(this.state.currentForecastData.timestamp * 1000);

    locationTimezoneData.time = moment.tz(timestamp, timezoneId).format();
    locationTimezoneData.hours = moment.tz(timestamp, timezoneId).format("H");
    locationTimezoneData.day = moment.tz(timestamp, timezoneId).format("dddd");
    locationTimezoneData.date = moment.tz(timestamp, timezoneId).format("MMMM DD, YYYY");

    let localTime = locationTimezoneData.time;
    let hours = locationTimezoneData.hours;
    let day = locationTimezoneData.day;
    let date = locationTimezoneData.date;

    //Add timezone to current and multiday data states
    let currentData = JSON.parse(
      JSON.stringify(this.state.currentForecastData)
    );

    currentData.localTime = localTime;
    currentData.timezoneId = timezoneId;
    currentData.hours = hours;
    currentData.day = day;
    currentData.date = date;

    let forecastData = JSON.parse(
      JSON.stringify(this.state.multiDayForecastData)
    );
    forecastData.hours = hours;

    let color = this.state.accentColor;

    if (hours >= 0 && hours < 6) {
      color = "#fe1743";
    } else if (hours >= 6 && hours < 12) {
      color = "#a96ed3";
    } else if (hours >= 12 && hours < 18) {
      color = "#19b4fc";
    } else if (hours >= 18 && hours < 24) {
      color = "#fcc319";
    }

    this.setState({
      currentForecastData: currentData,
      multiDayForecastData: forecastData,
      accentColor: color,
    });

    return {
      hours,
      day,
      date,
    };
  };

  extractDataForCurrentForecast = currentData => {
    const weather = currentData.weather[0].main;
    const weatherId = currentData.weather[0].id;
    const description = currentData.weather[0].description;

    const mainTemp = Math.round(currentData.main.temp);
    const minTemp = Math.round(currentData.main.temp_min);
    const maxTemp = Math.round(currentData.main.temp_max);

    const pressure = currentData.main.pressure;
    const humidity = currentData.main.humidity;
    const windSpeed = currentData.wind.speed;

    const coords = currentData.coord;

    const timestamp = currentData.dt;

    return {
      weather,
      weatherId,
      description,
      mainTemp,
      minTemp,
      maxTemp,
      pressure,
      humidity,
      windSpeed,
      coords,
      timestamp,
    };
  };

    // Take date object or unix timestamp in ms and return day string
    getDay = time => {
      const daysNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday ",
        "Friday",
        "Saturday",
        "Tomorrow"
      ];
      return daysNames[new Date(time).getDay()];
    };

  extractDataForMultiDayAndGraphComponents = forecastData => {
    const multiDayForecastData = [];
    const graphData = [];

    forecastData.list.forEach(forecast => {
      let item = {};
      item.day = this.getDay(forecast.dt * 1000);
      item.weatherId = forecast.weather[0].id;
      item.description = forecast.weather[0].description;
      item.mainTemp = Math.round(forecast.temp.day);

      multiDayForecastData.push(item);
      graphData.push(forecast.temp.day);
    });

    // Remove first element (current weather)
    multiDayForecastData.shift();

    return {
      multiDayForecastData,
      graphData
    };
  };

  render() {
    const hasLatLng = this.state.latLng.length > 0;
    const hasCityOrZipcode = this.state.queryString !== "";
    const shouldRenderApp = hasLatLng || hasCityOrZipcode;

    const instructionLayout = (
      <div className="app-instructions">
        <p>
          Allow Location Access or type city name/zip code in search area to get
          started.
        </p>
      </div>
    );

    const mainAppLayout = (
      <React.Fragment>
        <div className="app-today">
          <CurrentForecast
            data={this.state.currentForecastData}
            unit={this.state.unit}
          />
        </div>
        <div className="app-list-graph">
          <Slider dots wheel={true} arrows={false} autoplay={true} autoplaySpeed={5000} adaptiveHeight={true}>
            <div id="tab1">
              <MultiDayForecast data={this.state.multiDayForecastData} />
            </div>
            <div id="tab2">
              <Graph data={this.state.graphData} accentColor={this.state.accentColor} />
            </div>
          </Slider>
        </div>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        { ((this.state.locationTimezoneData.hours >= 20) || (this.state.locationTimezoneData.hours <= 5)) ? <div className="stars"></div> : null }
        { this.state.currentForecastData.weather === 'Rain' ? <div className="rain"></div> : null }
        <div
          className={`app-container hour-${
            this.state.locationTimezoneData
              ? this.state.locationTimezoneData.hours
              : 0
          }`}
        >
          <div className="app-nav">
            <Navbar
              searchSubmit={this.onSearchSubmit}
              changeUnit={this.onUnitChange}
              unit={this.state.unit}
              data={this.state.navbarData}
              accentColor={this.state.accentColor}
            />
          </div>
          {shouldRenderApp ? mainAppLayout : instructionLayout}
        </div>
        { (this.state.currentForecastData.weather === 'Clouds' || this.state.currentForecastData.weather === 'Rain' || this.state.currentForecastData.weather === 'Snow') ? <div className="clouds clouds1"></div> : null }
        { (this.state.currentForecastData.weather === 'Clouds' || this.state.currentForecastData.weather === 'Rain' || this.state.currentForecastData.weather === 'Snow') ? <div className="clouds clouds2"></div> : null }
      </React.Fragment>
    );
  }
}

export default App;
