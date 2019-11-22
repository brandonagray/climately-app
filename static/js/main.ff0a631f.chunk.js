(this["webpackJsonpclimately-app"]=this["webpackJsonpclimately-app"]||[]).push([[0],{171:function(t,e,a){},172:function(t,e,a){},173:function(t,e,a){},174:function(t,e,a){},177:function(t,e,a){},178:function(t,e,a){},179:function(t,e,a){},180:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(49),o=a.n(r),i=(a(56),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),h=a(17),d=a.n(h),p=a(50),f=a.n(p),E=(a(171),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).handleQueryChange=function(t){a.setState({query:t.target.value})},a.handleSearch=function(t){t.preventDefault(),a.props.searchSubmit(a.state.query)},a.state={query:""},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{onSubmit:this.handleSearch},c.a.createElement("input",{type:"search",value:this.state.query,name:"searchBox",id:"searchBox",placeholder:"Enter City",onChange:this.handleQueryChange,style:{borderBottom:"2px solid ".concat(this.props.accentColor)}}),c.a.createElement("span",{className:"search-button fa fa-search",onClick:this.handleSearch,style:{background:"".concat(this.props.accentColor),borderBottom:"1px solid ".concat(this.props.accentColor)}})))}}]),e}(n.Component)),y=(a(172),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).changeUnit=function(t){var e=t.target.textContent;a.props.onUnitChange(e)},a.state={unit:"C"},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"unit-container"},c.a.createElement("span",{className:"unit-value ".concat("C"===this.props.unit?"active-unit":""),style:{borderBottom:"C"===this.props.unit?"1px solid ".concat(this.props.accentColor):"none",background:"C"===this.props.unit?"".concat(this.props.accentColor):"transparent"},onClick:this.changeUnit},"C"),c.a.createElement("span",{className:"unit-value ".concat("F"===this.props.unit?"active-unit":""),style:{borderBottom:"F"===this.props.unit?"1px solid ".concat(this.props.accentColor):"none",background:"F"===this.props.unit?"".concat(this.props.accentColor):"transparent"},onClick:this.changeUnit},"F"))}}]),e}(n.Component)),v=(a(173),function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).sendNewUnitToParent=function(t){a.props.changeUnit(t)},a.sendQueryStringToParent=function(t){a.props.searchSubmit(t)},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("ul",{className:"navbar-container"},c.a.createElement("li",{className:"navbar-list-item"},c.a.createElement(E,{searchSubmit:this.sendQueryStringToParent,accentColor:this.props.accentColor})),c.a.createElement("li",{className:"navbar-list-item city-name"},c.a.createElement("span",{className:""},this.props.data.city)),c.a.createElement("li",{className:"navbar-list-item"},c.a.createElement(y,{unit:this.props.unit,onUnitChange:this.sendNewUnitToParent,accentColor:this.props.accentColor}))))}}]),e}(n.Component)),g=(a(174),[300,301,302,310,311,313,314,321,500,501,502,503,504,511,520,521,522,531,611,612,615,616,620,701]),b=[210,211,212,221,731,761,762,800],w=[200,201,202,230,231,232,600,601,602,621,622,711,721,741,771,781,801,802,803,804],D=function(t){var e=function(t,e){return t.indexOf(e)>-1};return e(g,t)?"wi-blue":e(b,t)?"wi-yellow":e(w,t)?"wi-gray":"wi-blue"},C=a(47),N=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.data,e=t.day,a=t.date,n=t.weatherId,r=t.description,o=t.mainTemp,i=t.minTemp,s=t.maxTemp,l=t.pressure,m=t.humidity,u=t.windSpeed,h=t.hours,d=t.localTime,p=t.timezoneId,f=this.props.unit,E=D(n),y="C"===f?"m/s":"miles/hr",v=0,g="";return h>=0&&h<6?(v=1,g="night"):h>=6&&h<12?(v=2,g="day"):h>=12&&h<18?(v=3,g="day"):h>=18&&h<24&&(v=4,g="night"),c.a.createElement("div",null,c.a.createElement("div",{className:"current-forecast-container"},c.a.createElement("div",{className:"date-container"},c.a.createElement("div",{className:"time-container"},d?C.tz(d,p).format("h:mm A"):null),c.a.createElement("div",null,e),c.a.createElement("div",null,a)),c.a.createElement("div",{className:"icon-desc-container"},c.a.createElement("div",{className:"icon-conatainer"},c.a.createElement("i",{className:"wi wi-owm-".concat(g,"-").concat(n," weather-icon ").concat(E)})),c.a.createElement("div",{className:"weather-desc"},r)),c.a.createElement("div",{className:"temp-container"},c.a.createElement("div",{className:"temp-text"},c.a.createElement("span",null,o),c.a.createElement("i",{className:"wi wi-degrees"})),c.a.createElement("div",{className:"high-low-container"},c.a.createElement("div",{className:"high-low-item accent-color-".concat(v)},c.a.createElement("span",null,c.a.createElement("i",{className:"wi wi-direction-up"})),c.a.createElement("span",null,"Max"),c.a.createElement("span",null,c.a.createElement("span",null,s,"\xb0"))),c.a.createElement("div",{className:"high-low-item accent-color-".concat(v)},c.a.createElement("span",null,c.a.createElement("i",{className:"wi wi-direction-down"})),c.a.createElement("span",null,"Min"),c.a.createElement("span",null,c.a.createElement("span",null,i,"\xb0")))))),c.a.createElement("div",{className:"extra-info-container"},c.a.createElement("div",{className:"extra-info-item  accent-color-".concat(v)},c.a.createElement("span",null,c.a.createElement("i",{className:"wi wi-humidity"})),c.a.createElement("span",null,"Humidity:"),c.a.createElement("span",null,m,"%")),c.a.createElement("div",{className:"extra-info-item  accent-color-".concat(v)},c.a.createElement("span",null,c.a.createElement("i",{className:"wi wi-barometer"})),c.a.createElement("span",null,"Pressure:"),c.a.createElement("span",null,l," hPa")),c.a.createElement("div",{className:"extra-info-item  accent-color-".concat(v)},c.a.createElement("span",null,c.a.createElement("i",{className:"wi wi-strong-wind"})),c.a.createElement("span",null,"Wind:"),c.a.createElement("span",null,u," ",y))))}}]),e}(n.Component),S=(a(177),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.data.hours,e=0;t>=0&&t<6?e=1:t>=6&&t<12?e=2:t>=12&&t<18?e=3:t>=18&&t<24&&(e=4);var a=this.props.data.map((function(t){return c.a.createElement(F,{key:t.day,data:t,accentColor:e})}));return c.a.createElement("div",null,c.a.createElement("p",{className:"multiday-forecast-info"},"6-Day Forecast"),c.a.createElement("div",{className:"multiday-forecast-container"},a))}}]),e}(n.Component)),F=function(t){var e=t.data,a=e.day,n=e.weatherId,r=e.description,o=e.mainTemp,i=t.accentColor,s=D(n);return c.a.createElement("div",{className:"single-list-item accent-color-".concat(i)},c.a.createElement("div",{className:"li-info-container"},c.a.createElement("div",{className:"li-day"},a),c.a.createElement("div",{className:"li-temp-text"},o,"\xb0"),c.a.createElement("div",{className:"li-desc"},r)),c.a.createElement("div",{className:"li-weather-icon"},c.a.createElement("i",{className:"wi wi-owm-".concat(n," ").concat(s)})))},O=S,j=a(18),x=(a(178),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"graph-container"},c.a.createElement("p",{className:"graph-info"},"6-Day Trend"),c.a.createElement("div",{className:"graph"},c.a.createElement(j.Sparklines,{data:this.props.data,height:50},c.a.createElement(j.SparklinesLine,{color:this.props.accentColor}),c.a.createElement(j.SparklinesSpots,{style:{fill:"#ffffff"}}))))}}]),e}(n.Component)),T=(a(179),a(47)),k=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).onUnitChange=function(t){a.setState({unit:t},a.notifyStateChange)},a.onSearchSubmit=function(t){a.setState({queryString:t,latLng:[]},a.notifyStateChange)},a.notifyStateChange=function(){var t=a.state.latLng.length>0,e=""!==a.state.queryString;(t||e)&&(a.fetchCurrentForecast(t).then((function(t){var e=a.extractDataForNavbar(t),n=a.extractDataForCurrentForecast(t);a.fetchLocationTime(n.coords,n.timestamp),a.setState({navbarData:e,currentForecastData:n})})).catch((function(t){console.log("Error:",t)})),a.fetchDailyWeatherForecast(t).then((function(t){var e=a.extractDataForMultiDayAndGraphComponents(t),n=e.multiDayForecastData,c=e.graphData;a.setState({multiDayForecastData:n,graphData:c})})).catch((function(t){console.log("Error:",t)})))},a.fetchCurrentForecast=function(t){var e=t?"lat=".concat(a.state.latLng[0],"&lon=").concat(a.state.latLng[1]):"q=".concat(a.state.queryString),n="C"===a.state.unit?"metric":"imperial",c="".concat("https://api.openweathermap.org/data/2.5/weather","?").concat(e,"&units=").concat(n,"&cnt=7&appid=").concat("e936cc62b3f22eb537ef8c1e231de24f");return d.a.get(c).then((function(t){return t.data})).catch((function(t){console.log("Error:",t)}))},a.fetchDailyWeatherForecast=function(t){var e=t?"lat=".concat(a.state.latLng[0],"&lon=").concat(a.state.latLng[1]):"q=".concat(a.state.queryString),n="C"===a.state.unit?"metric":"imperial",c="".concat("https://api.openweathermap.org/data/2.5/forecast/daily","?").concat(e,"&units=").concat(n,"&cnt=7&appid=").concat("e936cc62b3f22eb537ef8c1e231de24f");return d.a.get(c).then((function(t){return t.data})).catch((function(t){console.log("Error:",t)}))},a.fetchLocationTime=function(t,e){var n="".concat("https://maps.googleapis.com/maps/api/timezone/json","?location=").concat(t.lat,",").concat(t.lon,"&timestamp=").concat(e,"&key=").concat("AIzaSyAxc2CKDD9g8c9Wxgryv_7RTvddmkEEd1U");return d.a.get(n).then((function(t){var e=a.extractDataForTimezone(t.data);a.setState({locationTimezoneData:e})})).catch((function(t){console.log("Error:",t)}))},a.extractDataForNavbar=function(t){return{city:"".concat(t.name,", ").concat(t.sys.country)}},a.extractDataForTimezone=function(t){var e=t.timeZoneId,n=new Date(1e3*a.state.currentForecastData.timestamp);t.time=T.tz(n,e).format(),t.hours=T.tz(n,e).format("H"),t.day=T.tz(n,e).format("dddd"),t.date=T.tz(n,e).format("MMMM DD, YYYY");var c=t.time,r=t.hours,o=t.day,i=t.date,s=JSON.parse(JSON.stringify(a.state.currentForecastData));s.localTime=c,s.timezoneId=e,s.hours=r,s.day=o,s.date=i;var l=JSON.parse(JSON.stringify(a.state.multiDayForecastData));l.hours=r;var m=a.state.accentColor;return r>=0&&r<6?m="#fe1743":r>=6&&r<12?m="#a96ed3":r>=12&&r<18?m="#19b4fc":r>=18&&r<24&&(m="#fcc319"),a.setState({currentForecastData:s,multiDayForecastData:l,accentColor:m}),{hours:r,day:o,date:i}},a.extractDataForCurrentForecast=function(t){return{weather:t.weather[0].main,weatherId:t.weather[0].id,description:t.weather[0].description,mainTemp:Math.round(t.main.temp),minTemp:Math.round(t.main.temp_min),maxTemp:Math.round(t.main.temp_max),pressure:t.main.pressure,humidity:t.main.humidity,windSpeed:t.wind.speed,coords:t.coord,timestamp:t.dt}},a.getDay=function(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday ","Friday","Saturday","Tomorrow"][new Date(t).getDay()]},a.extractDataForMultiDayAndGraphComponents=function(t){var e=[],n=[];return t.list.forEach((function(t){var c={};c.day=a.getDay(1e3*t.dt),c.weatherId=t.weather[0].id,c.description=t.weather[0].description,c.mainTemp=Math.round(t.temp.day),e.push(c),n.push(t.temp.day)})),e.shift(),{multiDayForecastData:e,graphData:n}},a.state={unit:"C",queryString:"",latLng:[],accentColor:"transparent",navbarData:{},currentForecastData:{},locationTimezoneData:{},multiDayForecastData:[],graphData:[]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=navigator.geolocation;if(e){e.getCurrentPosition((function(e){t.setState({latLng:[e.coords.latitude,e.coords.longitude]},t.notifyStateChange)}),(function(){console.log("Permission Denied")}))}else console.log("GeoLocation not supported...")}},{key:"render",value:function(){var t=this.state.latLng.length>0,e=""!==this.state.queryString,a=t||e,n=c.a.createElement("div",{className:"app-instructions"},c.a.createElement("p",null,"Allow Location Access or type city name/zip code in search area to get started.")),r=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app-today"},c.a.createElement(N,{data:this.state.currentForecastData,unit:this.state.unit})),c.a.createElement("div",{className:"app-list-graph"},c.a.createElement(f.a,{dots:!0,wheel:!0,arrows:!1,autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0},c.a.createElement("div",{id:"tab1"},c.a.createElement(O,{data:this.state.multiDayForecastData})),c.a.createElement("div",{id:"tab2"},c.a.createElement(x,{data:this.state.graphData,accentColor:this.state.accentColor})))));return c.a.createElement(c.a.Fragment,null,this.state.locationTimezoneData.hours>=20||this.state.locationTimezoneData.hours<=5?c.a.createElement("div",{className:"stars"}):null,"Rain"===this.state.currentForecastData.weather?c.a.createElement("div",{className:"rain"}):null,c.a.createElement("div",{className:"app-container hour-".concat(this.state.locationTimezoneData?this.state.locationTimezoneData.hours:0)},c.a.createElement("div",{className:"app-nav"},c.a.createElement(v,{searchSubmit:this.onSearchSubmit,changeUnit:this.onUnitChange,unit:this.state.unit,data:this.state.navbarData,accentColor:this.state.accentColor})),a?r:n),"Clouds"===this.state.currentForecastData.weather||"Rain"===this.state.currentForecastData.weather||"Snow"===this.state.currentForecastData.weather?c.a.createElement("div",{className:"clouds clouds1".concat(document.location.href.indexOf("github")>-1?" on-github":"")}):null,"Clouds"===this.state.currentForecastData.weather||"Rain"===this.state.currentForecastData.weather||"Snow"===this.state.currentForecastData.weather?c.a.createElement("div",{className:"clouds clouds2".concat(document.location.href.indexOf("github")>-1?" on-github":"")}):null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},51:function(t,e,a){t.exports=a(180)},56:function(t,e,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.ff0a631f.chunk.js.map