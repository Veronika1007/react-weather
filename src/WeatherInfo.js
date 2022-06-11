import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FormattedDate date={props.data.date} />
      <h1>{props.data.city}</h1>
      <h3>
        {Math.round(props.data.temperature)}
        <span className="units">℃</span>
      </h3>
      <div className="WeatherDescription">
        <img src={props.data.icon} alt={props.data.description} />
        <p>{props.data.description}</p>
        <p>Feels Like: {Math.round(props.data.feelsLike)}℃</p>
        <p>Humidity: {props.data.humidity}%</p>
        <p>Wind: {props.data.wind} km/h</p>
      </div>
    </div>
  );
}
