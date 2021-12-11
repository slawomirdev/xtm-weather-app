import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { windDirection } from "../../utils/windDirection";
import { Data } from "../../types/homeTypes";

interface IMyProps {
  weather: Data;
}

const CurrentWeather = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  border-left: 2px solid #340a13;
  font-weight: bold;
  flex-direction: column;

  p {
    font-size: 1.8rem;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* div {
    margin: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin: 1rem;
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
      <h2>
        {format(
          new Date(
            (+weather.current.dt + +weather.timezone_offset - 3600) * 1000
          ),
          "MMM d, H:mm"
        )}
      </h2>
      <main>
        <img
          src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
          alt="weather icon"
        />

        <p>{Math.round(+weather.current.temp)} °C</p>
      </main>
      <p>{weather.current.weather[0].description}</p>

      <Details>
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

        <div>
          <Box color="#62507D" text="#fff">
            <p>Humidity</p>
            <span>{weather.current.humidity} %</span>
          </Box>
          <Box color="#936E9E" text="#fff">
            <p>Visibility</p>
            <span>{+weather.current.visibility / 1000}km</span>
          </Box>
        </div>
      </Details>
    </CurrentWeather>
  );
};

export default WeatherBox;
