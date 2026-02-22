import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function Main() {
  const [city, setCity] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Any action after response is set
  }, [response]);

  function callAPI(city) {
    setLoading(true);
    setError(null);
    setResponse(null);
    const url = BASE_URL;
    axios.post(url, { "location": city })
      .then((res) => {
        // Check if response contains errors at root level
        if (res.data.errors && Array.isArray(res.data.errors)) {
          const errorObj = res.data.errors[0];
          const errorMessage = `${errorObj.title} (Code: ${errorObj.code})`;
          setError(errorMessage);
          setResponse(null);
        } 
        // Check if noOfCigarette field contains errors
        else if (res.data.noOfCigarette && res.data.noOfCigarette.errors && Array.isArray(res.data.noOfCigarette.errors)) {
          const errorObj = res.data.noOfCigarette.errors[0];
          const errorMessage = `${errorObj.title} (Code: ${errorObj.code})`;
          setError(errorMessage);
          setResponse(null);
        }
        // Check if aqi field contains errors
        else if (res.data.aqi && res.data.aqi.errors && Array.isArray(res.data.aqi.errors)) {
          const errorObj = res.data.aqi.errors[0];
          const errorMessage = `${errorObj.title} (Code: ${errorObj.code})`;
          setError(errorMessage);
          setResponse(null);
        }
        else {
          // Success response
          setResponse(res.data);
          setError(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // Handle network errors or other axios errors
        let errorMessage = 'Failed to fetch data. Please try again.';
        
        if (error.response) {
          // Server responded with error status
          if (error.response.data && error.response.data.errors) {
            const errorObj = error.response.data.errors[0];
            errorMessage = `${errorObj.title} (Code: ${errorObj.code})`;
          } else if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          } else {
            errorMessage = `Server Error: ${error.response.status}`;
          }
        } else if (error.request) {
          // Request made but no response received
          errorMessage = 'No response from server. Please check the server connection.';
        }
        
        setError(errorMessage);
        setResponse(null);
        setLoading(false);
      });
  }

  function HandleChange(event) {
    setCity(event.target.value);
    setResponse(null);
    setError(null);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' && city && city !== '') {
      callAPI(city);
    }
  }

  return (
    <>
      {/* Search Section */}
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30">
          <h1 className="text-4xl font-bold text-white mb-2">Climate & Smoke Tracker</h1>
          <p className="text-blue-100 mb-6 text-lg">Enter a city to check air quality and smoking stats</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={HandleChange}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all duration-200"
              />
            </div>
            <button
              onClick={() => callAPI(city)}
              disabled={city === null || city === '' || loading}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
          {error && <p className="text-red-300 mt-4 font-medium">{error}</p>}
        </div>
      </div>

      {/* Results Section */}
      {response && !response?.errors && (
        <div className="w-full max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/30">
            {/* Header Background */}
            <div className="relative h-40 bg-gradient-to-br from-green-400 to-blue-500 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 -mt-8 relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  📍 {city.charAt(0).toUpperCase() + city.slice(1)}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Cigarette Stats */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Daily Smoking</h3>
                      <span className="text-3xl">🚬</span>
                    </div>
                    <p className="text-4xl font-bold text-orange-600">{response.noOfCigarette || '0'}</p>
                    <p className="text-sm text-gray-600 mt-2">cigarettes per day</p>
                  </div>

                  {/* AQI Stats */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Air Quality Index</h3>
                      <span className="text-3xl">💨</span>
                    </div>
                    <p className="text-4xl font-bold text-blue-600">{response.aqi || '0'}</p>
                    <p className="text-sm text-gray-600 mt-2">current AQI level</p>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-8 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-l-4 border-purple-500">
                  <p className="text-gray-800 font-medium text-lg">
                    💭 You smoke <span className="font-bold text-purple-600">{response.noOfCigarette || '0'}</span> cigarettes daily in an area with AQI of <span className="font-bold text-purple-600">{response.aqi || '0'}</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;