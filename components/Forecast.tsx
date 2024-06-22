"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from '@/context/LocationContext';
import { CityCoordinates } from '@/data/locations';

interface ForecastItem {
    time: string;
    temp: number;
    icon: string;
}

interface WeatherResponse {
    list: Array<{
        dt_txt: string;
        main: {
            temp: number;
        };
        weather: Array<{
            icon: string;
        }>;
    }>;
}

const Forecast: React.FC = () => {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);
    const [isLoading, setLoading] = useState(true);
    const { selectedLocation } = useLocation();

    useEffect(() => {
        const fetchWeather = async () => {
            if (!selectedLocation) return;

            try {
                const response = await axios.get<WeatherResponse>('https://api.openweathermap.org/data/2.5/forecast', {
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
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [selectedLocation]);

    const formatForecastData = (data: WeatherResponse): ForecastItem[] => {
        return data.list.slice(0, 10).map(item => ({
            time: new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            temp: Math.round(item.main.temp),
            icon: item.weather[0].icon,
        }));
    };

    const forecastData = weather ? formatForecastData(weather) : [];

    if (isLoading) {
        return <div className="forecast">Loading...</div>;
    }

    return (
        <div className="forecast flex flex-col items-center justify-center lg:w-4/5 lg:h-1/2 w-full bg-primaryColor bg-opacity-30 p-5 gap-y-2 rounded-2xl">
            <div className="forecast-grid flex items-center justify-around w-full gap-y-2">
                {forecastData.slice(0, 5).map((forecast, index) => (
                    <ForecastItem key={index} {...forecast} />
                ))}
            </div>
            <hr className="border-t border-gray-300 w-full my-1" />
            <div className="forecast-grid flex items-center justify-around w-full gap-y-2">
                {forecastData.slice(5).map((forecast, index) => (
                    <ForecastItem key={index} {...forecast} />
                ))}
            </div>
        </div>
    );
};

const ForecastItem: React.FC<ForecastItem> = ({ time, temp, icon }) => (
    <div className="forecast-item flex flex-col items-center justify-center w-[70px] gap-1">
        <span className="text-sm">{time}</span>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" className="w-8 h-6" />
        <span className="text-sm">{temp}°C</span>
    </div>
);

export default Forecast;
