// src/components/CurrentWeatherCard.jsx
import React from 'react';
import { MapPin, Droplets, Wind, Eye, Gauge } from 'lucide-react';

const CurrentWeatherCard = ({ weatherData, getWeatherIcon, formatDate }) => {
  const current = weatherData.current;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">
            {current.name}, {current.sys.country}
          </h2>
        </div>
        <div className="text-right text-gray-600">
          {formatDate(current.dt)}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div className="flex items-center gap-6">
          {getWeatherIcon(current.weather[0].main)}
          <div>
            <div className="text-6xl font-bold text-gray-800">
              {Math.round(current.main.temp)}°C
            </div>
            <div className="text-xl text-gray-600 capitalize">
              {current.weather[0].description}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Droplets className="w-5 h-5" />
              <span className="font-semibold">Kelembaban</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {current.main.humidity}%
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Wind className="w-5 h-5" />
              <span className="font-semibold">Angin</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {Math.round(current.wind.speed * 3.6)} km/h
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Eye className="w-5 h-5" />
              <span className="font-semibold">Jarak Pandang</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {(current.visibility / 1000).toFixed(1)} km
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Gauge className="w-5 h-5" />
              <span className="font-semibold">Tekanan</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {current.main.pressure} hPa
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-gray-600 pt-4 border-t">
        <span>Terasa seperti: {Math.round(current.main.feels_like)}°C</span>
        <span>Min: {Math.round(current.main.temp_min)}°C / Max: {Math.round(current.main.temp_max)}°C</span>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
