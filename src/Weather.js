import React from "react";
import SearchEngine from "./SearchEngine.js";
import CurrentWeather from "./CurrentWeather.js";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <div className="container weather-container">
                <SearchEngine />
                <CurrentWeather defaultCity="Denver" />
            </div>
        </div>
    );
}