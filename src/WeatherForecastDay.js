import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props){
    function maxTemp() {
        let temperature = (Math.round(props.data.temp.max));
        return `${temperature}°`
    }
    function minTemp() {
        let temperature = (Math.round(props.data.temp.min));
        return `${temperature}°`
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = [
        "Sun", 
        "Mon", 
        "Tue", 
        "Wed", 
        "Thu", 
        "Fri", 
        "Sat"
    ];

        return days[day];
    }
    return (
        <div>
             <div className="WeatherForecast-day">{day()}</div>
             <div className="WeatherForecast-icon">
                 <WeatherIcon code={props.data.weather[0].icon} size={12} />
             </div>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">
                            {maxTemp()}
                        </span>
                        <span className="WeatherForecast-temperature-min">
                            {minTemp()}
                        </span>
            </div>
        </div>
    );
}