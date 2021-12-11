import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Location = "Poznan" | "London" | "Havana";
type Coordinates = {
  lat: string;
  lon: string;
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CurrentWeather = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  flex-direction: column;
`;

const ForecastContainer = styled.div`
  display: flex;
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const [location, setLocation] = useState<Coordinates>({
    lat: "52.40",
    lon: "16.93",
  });
  const [city, setCity] = useState<Location>("Poznan");
  const [weather, setWeather] = useState<any>(null);

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
      <h1>Weather app</h1>
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
        <CurrentWeather>
          <img
            src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Temp: {weather.current.temp}</p>
          <div>
            <p>Wind speed: {weather.current.wind_speed} </p>
            <p>Wind direction: {weather.current.wind_deg} </p>
          </div>
          <p>
            Current time:
            {new Date(weather.current.dt * 1000).toLocaleTimeString("en-GB")}
          </p>
          <div>
            <p>
              Sunries:
              {new Date(weather.current.sunrise * 1000).toLocaleTimeString()}
            </p>
            <p>
              Sunset:
              {new Date(weather.current.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </CurrentWeather>
      ) : null}
      {weather ? (
        <ForecastContainer>
          {weather.daily.slice(1, 6).map((item: any) => {
            return (
              <WeatherWrapper key={item.dt}>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
                <p>
                  {item.temp.min}C / {item.temp.max}C
                </p>
              </WeatherWrapper>
            );
          })}
        </ForecastContainer>
      ) : null}
    </Wrapper>
  );
};

export default Home;
