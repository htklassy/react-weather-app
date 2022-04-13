import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";

import "./CurrentWeather.css";


export default function CurrentWeather(props){
    
    let [weatherData, setWeatherData] = useState({ready: false});
    let [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: ((response.data.main.temp -273.15)* 9) /5 +32,
            date: new Date(response.data.dt *1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city:response.data.name,
        });

    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        let apiKey = "ce7559a40e1096d539e469e7e924e165";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return(
        <div classname="CurrentWeather">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input 
                            type="search" 
                            placeholder="Enter in city..." 
                            className="form-control" 
                            autoFocus="on"
                            onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast />
             </div>
        </div>
               
    );
} else {
    search();
    return "Loading...";
    }
}