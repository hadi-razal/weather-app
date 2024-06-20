import React from 'react';

const forecastData = [
    { time: 'Now', temp: '25°', icon: '/cloud.png' },
    { time: '2 AM', temp: '25°', icon: '/cloud.png' },
    { time: '3 AM', temp: '23°', icon: '/cloud.png' },
    { time: '4 AM', temp: '22°', icon: '/cloud.png' },
    { time: '5 AM', temp: '20°', icon: '/cloud.png' },
    { time: '6 AM', temp: '25°', icon: '/cloud.png' },
    { time: '7 AM', temp: '25°', icon: '/cloud.png' },
    { time: '8 AM', temp: '23°', icon: '/cloud.png' },
    { time: '9 AM', temp: '22°', icon: '/cloud.png' },
    { time: '10 AM', temp: '20°', icon: '/cloud.png' },
];

const ForecastItem = ({ time, temp, icon }: any) => (
    <div className='flex flex-col items-center justify-center w-[60px] gap-1'>
        <span>{time}</span>
        <img src={icon} alt='Cloudy' className='w-8 h-6' />
        <span>{temp}</span>
    </div>
);

const Forecast = () => (
    <div className='flex flex-col items-center w-full bg-primaryColor bg-opacity-30 p-5 gap-y-2 rounded-2xl'>
        <div className='flex flex-wrap items-center justify-around w-full gap-y-2'>
            {forecastData.slice(0, 5).map((forecast, index) => (
                <ForecastItem key={index} {...forecast} />
            ))}
        </div>
        <hr className='border-t border-gray-300 w-full my-1' />
        <div className='flex flex-wrap items-center justify-around w-full gap-y-2'>
            {forecastData.slice(5).map((forecast, index) => (
                <ForecastItem key={index} {...forecast} />
            ))}
        </div>
    </div>
);

export default Forecast;
