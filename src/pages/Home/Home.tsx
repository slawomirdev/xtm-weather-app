import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Location = "Poznan" | "Londyn" | "Havana";

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

const Home = () => {
  const [location, setLocation] = useState<Location>("Poznan");
  const [currentLocationData, setCurrentLocationData] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        const data = await response.json();
        setCurrentLocationData(data);
      } catch (error) {
        console.log("Fetch error: ", error);
      }
    };
    fetchWeather();
  }, [location]);

  return (
    <Wrapper>
      <h1>Weather app</h1>
      <label htmlFor="locations">Choose location</label>
      <select
        name="locations"
        id="locations"
        value={location}
        onChange={(e) => setLocation(e.target.value as Location)}
      >
        <option value="Poznan">Poznań</option>
        <option value="Londyn">Londyn</option>
        <option value="Havana">Havana</option>
      </select>
      {currentLocationData ? (
        <CurrentWeather>
          <img
            src={`http://openweathermap.org/img/wn/${currentLocationData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Temp: {currentLocationData.main.temp}</p>
          <div>
            <p>Wind speed: {currentLocationData.wind.speed} </p>
            <p>Wind direction: {currentLocationData.wind.deg} </p>
          </div>
          <div>
            <p>
              Sunries:
              {new Date(
                currentLocationData.sys.sunrise * 1000
              ).toLocaleTimeString()}
            </p>
            <p>
              Sunset:
              {new Date(
                currentLocationData.sys.sunset * 1000
              ).toLocaleTimeString()}
            </p>
          </div>
        </CurrentWeather>
      ) : null}
    </Wrapper>
  );
};

export default Home;
