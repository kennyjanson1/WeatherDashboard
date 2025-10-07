import React from "react";
import WeatherDashboard from "./pages/WeatherDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 text-white flex flex-col">

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-start py-8 px-4">
        <div className="w-full max-w-4xl">
          <WeatherDashboard />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm opacity-80 border-t border-white/20">
        <p>Data by OpenWeatherMap</p>
        <p>© 2025 Kenny Janson — React + TailwindCSS</p>
      </footer>
    </div>
  );
}

export default App;
