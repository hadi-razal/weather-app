import React from "react";


const WeatherOverviewCard = () => {
  return (
    <div className="flex items-center justify-center lg:w-[80%] lg:h-1/2 rounded-2xl p-5 w-full">
      <div className="flex flex-col text-sm font-light text-center w-full">
        <h1 className="text-3xl font-bold text-start pb-1">Weather Overview</h1>
        <p className="text-start">
          Experience the dynamic weather of Kochi! From sunny days perfect for
          exploring to occasional rain showers that refresh the air, Kochi
          offers a diverse climate year-round. Stay prepared with
          up-to-the-minute forecasts, and enjoy all the seasonal beauty this
          vibrant city has to offer.
        </p>
      </div>
    </div>
  );
};

export default WeatherOverviewCard;
