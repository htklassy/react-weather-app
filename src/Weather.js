import React from "react";
import CurrentWeather from "./CurrentWeather.js";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <div className="container weather-container">
                <CurrentWeather defaultCity="Denver" />
            </div>
        </div>
    );
}