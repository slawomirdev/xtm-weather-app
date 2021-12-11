import React from "react";
import { format } from "date-fns";
import { windDirection } from "../../utils/windDirection";
import { Data } from "../../types/homeTypes";
import { CurrentWeather, Details, Box } from "./styles";

interface IMyProps {
  weather: Data;
}

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
