"use client";

import React, { useState, useEffect } from 'react';
import WeatherCard from '@/components/WeatherCard';
import WeatherOverviewCard from '@/components/WeatherOverviewCard';
import Forecast from '@/components/Forecast';
import axios from 'axios';

const Page = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            lat: 10,
            lon: 12,
            exclude: 'minutely,hourly',
            appid: 'e6deb106ec90eb99cc176e05b742466a',
          },
        });
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  console.log(weather);



  return (
    <div className='relative bg-bgImageSunny bg-cover flex items-center justify-center gap-3 min-h-screen p-3'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md'></div>

      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-3 relative z-10'>

        <div className='flex flex-col items-center justify-center text-white lg:w-1/2'>
          <WeatherCard />
        </div>

        <div className='flex flex-col items-start justify-evenly h-full gap-3 text-white lg:w-1/2'>
          <Forecast />
          <WeatherOverviewCard />
        </div>

      </div>
    </div>
  );
};

export default Page;
