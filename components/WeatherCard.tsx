import React from "react";

const WeatherCard = () => {
  return (
    <div className="z-10 text-primaryFontColor flex flex-col items-center justify-center gap-1 lg:h-[450px] lg:w-[400px] w-full bg-primaryColor rounded-2xl p-6 shadow-lg">
      <span className="text-2xl lg:text-3xl font-bold">Today</span>
      <div className="flex items-center justify-center gap-2">
        <img src="/cloudBrown.png" alt="Weather Icon" className="w-12 h-10" />
        <span className="text-[40px] lg:text-[60px] font-bold">46°C</span>
      </div>
      <span className="text-md lg:text-lg font-medium">Sunny</span>
      <span className="text-md lg:text-lg font-medium">Kochi, Kerala</span>
      <span className="text-xs lg:text-sm font-light">Date: 10/30/2003</span>
      <div className="flex justify-between w-full px-6 mt-4 text-xs lg:text-sm">
        <span>Feels like 30°C</span>
        <span>Sunset 30</span>
      </div>
    </div>
  );
};

export default WeatherCard;
