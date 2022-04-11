import React from "react";
import "./CurrentWeather.css";


export default function CurrentWeather(){
    return(
        <div classname="CurrentWeather">
            <div className="col-8">
                <h2>
                    Denver
                </h2>
                <h3>
                    Last updated: 13:46
                <br />
                    Clear
                </h3>
            </div>
        </div>
    )
}