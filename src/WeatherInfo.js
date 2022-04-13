import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

import "./CurrentWeather.css";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="row">
                <h1>{props.data.city}</h1>
                <ul>
                    <li>
                        <FormatDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-6">
                    <WeatherIcon code={props.data.icon} size={54} />
                    <WeatherTemperature fahrenheit={props.data.temperature} />
                </div>
                <div className="col-6">
                     <ul>
                        <li>Humidity: {props.data.humidity}% </li>
                        <li>Wind: {props.data.wind} mph </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}