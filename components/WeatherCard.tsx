"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from '@/context/LocationContext';
import { cities } from '@/data/locations';

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const { selectedLocation, setSelectedLocation } = useLocation();

  useEffect(() => {
    const fetchWeather = async () => {
      if (!selectedLocation) return;

      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            lat: selectedLocation.latitude,
            lon: selectedLocation.longitude,
            appid: 'e6deb106ec90eb99cc176e05b742466a',
            units: 'metric',
          },
        });
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [selectedLocation]);

  const formatSunset = (sunset: number) => {
    const sunsetDate = new Date(sunset * 1000);
    return sunsetDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const getFormattedDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    return `${day} ${getMonthName(currentDate.getMonth())} ${year}`;
  };

  const getMonthName = (month: number) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityName = event.target.value;
    const selectedCity = cities.find((city: any) => city.name === selectedCityName);
    setSelectedLocation(selectedCity || null);
  };

  const getWeatherIcon = (icon: string) => `https://openweathermap.org/img/wn/${icon}.png`;

  const currentDate = getFormattedDate();
  const sunsetTime = weather?.sys?.sunset;
  const formattedSunset = sunsetTime ? formatSunset(sunsetTime) : '';

  return (
    <div className="z-10 text-primaryFontColor flex flex-col items-center justify-center gap-1 lg:h-[450px] lg:w-[400px] w-full bg-primaryColor rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl lg:text-3xl font-bold">Today</h2>
      <div className="flex items-center justify-center gap-2">
        {weather?.weather && (
          <img src={getWeatherIcon(weather.weather[0].icon)} alt="Weather Icon" className="w-22 h-20" />
        )}
        <span className="text-[40px] lg:text-[60px] font-bold">{Math.round(weather?.main?.temp)}°C</span>
      </div>
      <span className="text-md lg:text-lg font-medium">{weather?.weather[0]?.main}</span>
      <select
        className="p-2 rounded  border-gray-300 outline-none bg-primaryColor"
        onChange={handleLocationChange}
        value={selectedLocation?.name || ''}
      >
        <option value="">Select a location</option>
        {cities.map((city: any) => (
          <option key={city.name} value={city.name}>{city.name}</option>
        ))}
      </select>
      <span className="text-xs lg:text-sm font-light"> {currentDate}</span>
      <div className="flex justify-between w-full px-6 mt-4 text-xs lg:text-sm">
        <span>Feels like {Math.round(weather?.main?.feels_like)}°C</span>
        <span>Sunset {formattedSunset}</span>
      </div>

    </div>
  );
};

export default WeatherCard;
