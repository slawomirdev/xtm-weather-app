type dailyData = {
  dt: string;
  temp: {
    min: string;
    max: string;
  };
  weather: weatherArray[];
};

type weatherArray = {
  icon: string;
  description: string;
};

export type Data = {
  timezone_offset: string;
  current: {
    dt: string;
    sunrise: string;
    sunset: string;
    temp: string;
    wind_speed: string;
    wind_deg: string;
    wind_gust: string;
    humidity: string;
    visibility: string;
    weather: weatherArray[];
  };
  daily: dailyData[];
};

export type Location = "Poznan" | "London" | "Havana";
export type Coordinates = {
  lat: string;
  lon: string;
};
