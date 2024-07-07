export interface WeatherType {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: (HourlyEntity)[];
  daily: (DailyEntity)[];
}
export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: (WeatherEntity)[];
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface HourlyEntity {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: (WeatherEntity)[];
  pop: number;
  rain?: Rain | null;
}
export interface Rain {
  '1h': number;
}
export interface DailyEntity {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: (WeatherEntity)[];
  clouds: number;
  pop: number;
  rain?: number | null;
  uvi: number;
}
export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
