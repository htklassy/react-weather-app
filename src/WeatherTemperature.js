import React, { useState } from "react";
import "./CurrentWeather.css";

export default function WeatherTemperature(props){
    let [unit, setUnit] = useState("fahrenheit");

    function showCelsius(event) {
        event.prevent.default();
        setUnit("celsius");
    }
    function showFahrenheit(event) {
        event.prevent.default();
        setUnit("fahrenheit");
    }
    function celsius() {
        return (props.fahrenheit - 32) * 5/9;
    }
    if (unit === "fahrenheit") {
        return(
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.fahrenheit)}</span>
            <span className="unit">
                °F | {" "} 
                <a href="/" onClick={showCelsius}> 
                °C
                </a>
            </span>
        </div>
    );
    } else {
        return (
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(celsius())}</span>
            <span className="unit">
               <a href="/" onClick={showFahrenheit}>
                 F° 
                </a>{" "}
                | C°
            </span>
        </div>
        );
    }

    
}