import React from 'react';
import WeatherCard from '@/components/WeatherCard';

const Page = () => {
  return (
    <div className='bg-bgImageSunny bg-cover flex flex-col md:flex-row items-center justify-evenly gap-5 h-screen p-5'>
      <WeatherCard />
      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='flex items-center justify-center h-[200px] w-[350px] bg-primaryColor rounded-lg text-gray-800 p-6 shadow-lg'>
          <span className="text-lg font-medium">Weather Forecast</span>
        </div>
        <div className='flex items-center justify-center h-[200px] w-[350px] bg-primaryColor rounded-lg text-gray-800 p-6 shadow-lg'>
          <span className="text-sm font-light text-center">
            Experience the dynamic weather of Kochi! From sunny days perfect for exploring to occasional rain showers that refresh the air, Kochi offers a diverse climate year-round. Stay prepared with up-to-the-minute forecasts, and enjoy all the seasonal beauty this vibrant city has to offer.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
