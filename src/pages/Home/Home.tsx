import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import WeatherBox from "../../components/WeatherBox/WeatherBox";
import { Data, Coordinates, Location } from "../../types/homeTypes";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;

  select {
    width: 13rem;
    font-size: 1.3rem;
    border: 2px solid black;
    padding: 0.2rem;
  }
  select:hover {
    background-color: #f7ec9e;
  }
`;

const ForecastContainer = styled.div`
  display: flex;
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Home = () => {
  const [location, setLocation] = useState<Coordinates>({
    lat: "52.40",
    lon: "16.93",
  });
  const [city, setCity] = useState<Location>("Poznan");
  const [weather, setWeather] = useState<Data | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log("Fetch error: ", error);
      }
    };
    fetchWeather();
  }, [location]);

  const setCordinates = (city: Location) => {
    switch (city) {
      case "Poznan":
        setLocation({
          lat: "52.40",
          lon: "16.93",
        });
        break;
      case "London":
        setLocation({
          lat: "51.50",
          lon: "-0.11",
        });
        break;
      case "Havana":
        setLocation({
          lat: "23.11",
          lon: "-82.36",
        });
        break;
    }
    setCity(city);
  };

  return (
    <Wrapper>
      <h1>XTM Weather</h1>
      <label htmlFor="locations">Choose location</label>
      <select
        name="locations"
        id="locations"
        value={city}
        onChange={(e) => setCordinates(e.target.value as Location)}
      >
        <option value="Poznan">Poznań</option>
        <option value="London">Londyn</option>
        <option value="Havana">Havana</option>
      </select>
      {weather ? (
        <>
          <h2>
            {format(
              new Date(
                (+weather.current.dt + +weather.timezone_offset - 3600) * 1000
              ),
              "MMM d, H:mm"
            )}
          </h2>
          <WeatherBox weather={weather} />
        </>
      ) : null}
      {weather && weather.daily ? (
        <ForecastContainer>
          {weather.daily.slice(1, 6).map((item: any) => {
            return (
              <WeatherWrapper key={item.dt}>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
                <p>
                  {Math.round(+item.temp.max)} °C &nbsp;/&nbsp;
                  {Math.round(+item.temp.min)} °C
                </p>
                <p>{format(new Date(+item.dt * 1000), "cccc, MMM d")}</p>
              </WeatherWrapper>
            );
          })}
        </ForecastContainer>
      ) : null}
    </Wrapper>
  );
};

export default Home;
