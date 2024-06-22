"use client";

import WeatherCard from '@/components/WeatherCard';
import WeatherOverviewCard from '@/components/WeatherOverviewCard';
import Forecast from '@/components/Forecast';


const Page: React.FC = () => {




  return (
    <div className='relative bg-bgImageSunny bg-cover flex items-center justify-center gap-3 min-h-screen p-3'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md'></div>

      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-3 relative z-10'>

        <>
          <div className='flex flex-col items-center justify-center text-white lg:w-1/2 w-full'>
            <WeatherCard />
          </div>
          <div className='flex flex-col items-start justify-evenly h-full gap-3 text-white lg:w-1/2 w-full'>
            <Forecast />
            <WeatherOverviewCard />
          </div>
        </>

      </div>
    </div>
  );
};

export default Page;
