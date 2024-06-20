import React from "react";

const WeatherCard = () => {
  return (
    <div className="  text-primaryFontColor flex flex-col items-center justify-center gap-4 h-[450px] w-[400px] bg-primaryColor from-secondaryColor to-primaryColor rounded-lg p-6 shadow-lg">
      <span className="text-3xl font-bold">Today</span>
      <span className="text-[60px] font-bold">46°C</span>
      <span className="text-lg font-medium">Sunny</span>
      <span className="text-lg font-medium">Kochi, Kerala</span>
      <span className="text-sm font-light">Date: 10/30/2003</span>
      <div className="flex justify-between w-full px-6 mt-4 text-sm">
        <span>Feels like 30°C</span>
        <span>Sunset 30</span>
      </div>
    </div>
  );
};

export default WeatherCard;
