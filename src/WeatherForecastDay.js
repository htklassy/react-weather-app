import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props){
    function maxTemp() {
        let temperature = (Math.round(props.data.temp.max - 273.15) * 9 /5 + 32);
        return `${temperature}°`
    }
    function minTemp() {
        let temperature = (Math.round(props.data.temp.min - 273.15) * 9 /5 + 32);
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
                <WeatherIcon code={props.data.weather[0].icon} size={12} />
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