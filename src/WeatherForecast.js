import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";


import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }   
    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                        );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
       let apiKey = "ce7559a40e1096d539e469e7e924e165";
       let lon = props.coordinates.lon;
       let lat = props.coordinates.lat;
       let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
       
       axios.get(apiUrl).then(handleResponse);
       return null;
    }
}