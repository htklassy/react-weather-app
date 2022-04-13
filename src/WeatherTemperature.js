import React, { useState } from "react";
import "./CurrentWeather.css";

export default function WeatherTemperature(props){
    let [unit, setUnit] = useState("fahrenheit");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {
        return(
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.fahrenheit)}</span>
            <span className="unit">
                °F |  {" "}
                <a href="/" rel="noopener noreferrer" onClick={showCelsius}> 
                °C
                </a>
            </span>
        </div>
    );
    } else {
        let celsius = ((props.fahrenheit -32) * 5/9);
        return (
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(celsius)}</span>
            <span className="unit">
               <a href="/" rel="noopener noreferrer" onClick={showFahrenheit}>F° </a>
                | C° {" "}
            </span>
            </div>
        );
    }
}