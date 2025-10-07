// src/components/ForecastCard.jsx
import React from 'react';

const ForecastCard = ({ forecast, getWeatherIcon, formatDate }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Prakiraan 5 Hari</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
            <div className="font-semibold text-gray-700 mb-2">
              {formatDate(day.dt)}
            </div>
            <div className="flex justify-center mb-2">
              {getWeatherIcon(day.weather[0].main)}
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              {Math.round(day.main.temp)}°C
            </div>
            <div className="text-sm text-gray-600 capitalize">
              {day.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
