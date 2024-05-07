import React from 'react';
import { useWeather } from '../context/whether';
import Button from './Button';

function Input() {
  const weather = useWeather();
  
  return (
  
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input 
          type="search"
          value={weather.searchCity} 
          onChange={(e) => weather.setsearchCity(e.target.value)} 
          id="default-search" 
          className="block md:w-96 sm:w-5/6 py-3 ps-10 text-sm text-white border border-blue-950 rounded-lg bg-slate-700 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 outline-none" 
          placeholder="Search City..." 
          required 
        />
        
      </div>
    
  );
}

export default Input;
