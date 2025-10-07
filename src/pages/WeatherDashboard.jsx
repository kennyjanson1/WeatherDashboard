// src/pages/WeatherDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import CurrentWeatherCard from '../components/CurrentWeatherCard';
import ForecastCard from '../components/ForecastCard';
import Footer from '../components/Footer';

const WeatherDashboard = () => {
  const [city, setCity] = useState('Jakarta');
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '92707ec4d9bd3d0c478216899e04258b'; // <== Ganti dengan API key kamu
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const currentResponse = await fetch(`${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=id`);
      if (!currentResponse.ok) throw new Error('Kota tidak ditemukan');
      const currentData = await currentResponse.json();

      const forecastResponse = await fetch(`${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=id`);
      const forecastData = await forecastResponse.json();

      setWeatherData({
        current: currentData,
        forecast: forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 5),
      });
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWeather(city); }, []);

  const handleSearch = () => {
    if (searchInput.trim()) {
      setCity(searchInput);
      fetchWeather(searchInput);
      setSearchInput('');
    }
  };

  const handleKeyPress = (e) => e.key === 'Enter' && handleSearch();

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain?.toLowerCase()) {
      case 'clear': return <Sun className="w-16 h-16 text-yellow-400" />;
      case 'clouds': return <Cloud className="w-16 h-16 text-gray-400" />;
      case 'rain': case 'drizzle': return <CloudRain className="w-16 h-16 text-blue-400" />;
      case 'snow': return <CloudSnow className="w-16 h-16 text-blue-200" />;
      default: return <Cloud className="w-16 h-16 text-gray-400" />;
    }
  };

  const formatDate = (timestamp) => new Date(timestamp * 1000).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">☁️ Weather Dashboard</h1>
          <p className="text-blue-100">Cek cuaca real-time di berbagai kota</p>
        </div>

        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
        />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6 max-w-md mx-auto">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center text-white text-xl">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="mt-4">Memuat data cuaca...</p>
          </div>
        ) : (
          weatherData && (
            <div className="space-y-6">
              <CurrentWeatherCard
                weatherData={weatherData}
                getWeatherIcon={getWeatherIcon}
                formatDate={formatDate}
              />
              <ForecastCard
                forecast={weatherData.forecast}
                getWeatherIcon={getWeatherIcon}
                formatDate={formatDate}
              />
            </div>
          )
        )}
        <Footer />
      </div>
    </div>
  );
};

export default WeatherDashboard;
