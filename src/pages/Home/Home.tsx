import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styled from "styled-components";

type Location = "Poznan" | "London" | "Havana";
type Coordinates = {
  lat: string;
  lon: string;
};
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
          <p>Temp: {Math.round(+weather.current.temp)} &#8451;</p>
          <div>
            <p>Wind speed: {weather.current.wind_speed} </p>
            <p>Wind direction: {weather.current.wind_deg} </p>
          </div>
          <p>
            Current time:
            {format(
              new Date(
                (+weather.current.dt + +weather.timezone_offset - 3600) * 1000
              ),
              "MMM d, H:mm"
            )}
          </p>
          <div>
            <p>
              Sunries:
              {format(
                new Date(
                  (+weather.current.sunrise + +weather.timezone_offset - 3600) *
                    1000
                ),
                "H:mm"
              )}
            </p>
            <p>
              Sunset:
              {format(
                new Date(
                  (+weather.current.sunset + +weather.timezone_offset - 3600) *
                    1000
                ),
                "H:mm"
              )}
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
                  {Math.round(+item.temp.max)} &#8451; /
                  {Math.round(+item.temp.min)} &#8451;
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
