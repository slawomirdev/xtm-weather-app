import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { windDirection } from "../../utils/windDirection";

interface IMyProps {
  weather: Data;
}

type Data = {
  timezone_offset: string;
  current: {
    dt: string;
    sunrise: string;
    sunset: string;
    temp: string;
    wind_speed: string;
    wind_deg: string;
    wind_gust: string;
    weather: [
      {
        icon: string;
        description: string;
      }
    ];
  };
  daily: [
    {
      dt: string;
      temp: {
        min: string;
        max: string;
      };
    }
  ];
};

const CurrentWeather = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  border-left: 2px solid #340a13;
  font-weight: bold;
  /* flex-direction: column; */

  div {
    margin: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

type BoxProps = {
  color?: string;
  text?: string;
};

const Box = styled.div`
  height: 5rem;
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${(props: BoxProps) =>
    props.color ? props.color : "#fff"};
  color: ${(props: BoxProps) => (props.text ? props.text : "black")};
  p {
    font-weight: normal;
    font-size: 0.8rem;
    margin: 0.2rem;
  }

  span {
    font-weight: bold;
    text-align: center;
  }
`;

const WeatherBox: React.FC<IMyProps> = ({ weather }) => {
  return (
    <CurrentWeather>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
          alt="weather icon"
        />

        <p>{Math.round(+weather.current.temp)} °C</p>
        <p>{weather.current.weather[0].description}</p>
      </div>
      <div>
        <Box color="#051937" text="#fff">
          <p>Wind speed</p>
          <span>{weather.current.wind_speed} m/s</span>
        </Box>
        <Box color="#00456A" text="#fff">
          <p>Wind direction</p>
          <span>{windDirection(+weather.current.wind_deg)}</span>
        </Box>
      </div>

      <div>
        <Box color="#340A13" text="#fff">
          <p>Sunrise</p>
          <span>
            {" "}
            {format(
              new Date(
                (+weather.current.sunrise + +weather.timezone_offset - 3600) *
                  1000
              ),
              "H:mm"
            )}
          </span>
        </Box>
        <Box color="#66373D" text="#fff">
          <p>Sunset</p>
          <span>
            {" "}
            {format(
              new Date(
                (+weather.current.sunset + +weather.timezone_offset - 3600) *
                  1000
              ),
              "H:mm"
            )}
          </span>
        </Box>
      </div>
    </CurrentWeather>
  );
};

export default WeatherBox;
