import React, { useState } from "react";
import FormatDate from "./FormatDate.js";
import axios from "axios";

import "./CurrentWeather.css";


export default function CurrentWeather(props){
    
    let [weatherData, setWeatherData] = useState({ready: false});
    let [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: (response.data.main.temp),
            date: new Date(response.data.dt *1000),
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            humidity: response.data.main.humidity,
            wind: response.data.main.speed,
            city:response.data.name,
        });

    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return(
        <div classname="CurrentWeather">
            
            <div className="row">
                <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter in city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
                <h1>
                    {weatherData.city}
                </h1>
                <ul>
                    <li>
                        <FormatDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src ={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0% </li>
                        <li>Humidity: {weatherData.humidity}% </li>
                        <li>Wind: {weatherData.wind}mph </li>
                    </ul>
                </div>
            </div>
        </div>
    );
} else {
    let apiKey = "ce7559a40e1096d539e469e7e924e165";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
    }
}