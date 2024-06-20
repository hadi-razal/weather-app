import React from 'react';
import WeatherCard from '@/components/WeatherCard';
import WeatherOverviewCard from '@/components/WeatherOverviewCard';
import Forecast from '@/components/Forecast';



const Page = () => {
  return (
    <div className='relative bg-bgImageSunny bg-cover flex flex-col md:flex-row items-center justify-evenly gap-3 min-h-screen p-3'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md'></div>

      <WeatherCard />

      <div className='flex flex-col items-center justify-center gap-3 relative z-10 text-white w-full'>


        <Forecast />


        <WeatherOverviewCard />

        
      </div>
    </div>
  );
};

export default Page;
