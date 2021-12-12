import React from "react";
import { ForecastContainer, WeatherWrapper } from "./styles";
import { format } from "date-fns";
import { Data } from "../../types/homeTypes";

interface IMyProps {
  weather: Data;
}

const ForecastBox: React.FC<IMyProps> = ({ weather }) => {
  return (
    <ForecastContainer data-testid="forecastContainerWithData">
      {weather.daily.slice(1, 6).map((item: any) => {
        return (
          <WeatherWrapper key={item.dt}>
            <p>{format(new Date(+item.dt * 1000), "cccc, MMM d")}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <p>
              {Math.round(+item.temp.max)} °C &nbsp;/&nbsp;
              {Math.round(+item.temp.min)} °C
            </p>
            <p>{item.weather[0].description}</p>
          </WeatherWrapper>
        );
      })}
    </ForecastContainer>
  );
};

export default ForecastBox;
