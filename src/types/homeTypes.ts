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

export type Location = "Poznan" | "London" | "Havana";
export type Coordinates = {
  lat: string;
  lon: string;
};
