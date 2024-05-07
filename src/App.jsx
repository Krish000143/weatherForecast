import react, { useEffect } from 'react'
import Input from './Components/Input'
import Button from './Components/Button'
import Card from './Components/Card'
import { useWeather } from './context/whether'
import { TbTemperatureCelsius } from "react-icons/tb";


function App() {
  const weather = useWeather();

  console.log(weather);
  
  useEffect(()=>{
    weather.fetchCurrentuserLocation();
  },[]);

{/* --------- function for current date -------------*/}

  const date = new Date(weather?.data?.location?.localtime)

  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

// Determine whether it's AM or PM
const period = (date.getHours() < 12) ? 'AM' : 'PM';

// Convert to 12-hour format
const hours12 = (date.getHours() % 12) || 12;

const formattedDate = `${day}-${month}-${year} ${hours12}:${minutes} ${period}`;


{/* -------------- end function ----------*/}


  {/* ------------ function for current day -------------*/}

  function getDayName() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const currentDate = new Date();
    
    const dayIndex = currentDate.getDay();

    return days[dayIndex];
}

const dayName = getDayName(weather?.data?.current?.is_day);

{/*------------- end function -------------------*/}




  return (
    <>
    <div className='min-h-screen min-w-screen bg-gradient-to-r from-black to-blue-950 pb-10 '>
      
      
      <div className='h-full max-w-auto mx-auto'>

        <div className="px-10 py-5 flex justify-start items-start h-full">
          <h1 className="md:text-3xl sm:text-lg text-white font-Sarabun">WeatherForcast.</h1>
        </div>          

          <div className='flex justify-center md:gap-1 sm:gap-0'>

            <Input/>
            <Button onClick={weather.fetchdata} value='Search'/>

          </div>

        <div className='flex justify-center items-center mt-8'>

          <span className='text-2xl sm:text-2xl md:text-4xl text-white font-Sarabun '>{weather?.data?.location?.name}, {weather?.data?.location?.region}, {weather?.data?.location?.country}</span>
  
        </div>
  
        <div className='flex justify-center items-center mt-3'>
        
          <span className='text-sm md:text-lg sm:text-sm text-white font-Sarabun '>{dayName}, {formattedDate}</span>

        </div>

        <div className='flex justify-center items-center mt-5'>
          <div className='inline-block bg-slate-800 rounded-lg'>
            <p className='md:text-lg sm:text-sm text-white p-2 '>{weather?.data?.current?.condition?.text}</p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <img src={weather?.data?.current?.condition?.icon} alt="Weather Icon" className="h-60 md:h-40 w-auto md:w-40" />
        </div>
        
        <div className='flex justify-center items-center'>
          <h1 className='md:text-4xl sm:text-lg text-white font-light'>{weather?.data?.current?.temp_c}°C</h1>
        </div>

        <div className='flex justify-center items-center mt-8'>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-3'>

              <div className='p-3 w-80 bg-slate-800 rounded-lg flex flex-row justify-center items-center leading-normal'>
                <div class="basis-1/4">
                  <i class="fa-solid fa-temperature-three-quarters text-4xl text-white basis-1/4"></i>
                </div>

                <div class="basis-1/2">
                  <span className='text-lg text-white flex '> Real feel</span>
                  <span className='text-2xl text-white ml-0'>{weather?.data?.current?.feelslike_c}°</span>
                </div>
    
              </div>
           

              <div className='p-3 w-80 bg-slate-800 rounded-lg flex flex-row justify-center items-center leading-normal'>
               <div class="basis-1/4">
                  <i class="fa-solid fa-temperature-three-quarters text-4xl text-white basis-1/4"></i>

                </div>

                <div class="basis-1/2">
                  <span className='text-lg text-white flex '>Fahrenheit</span>
                  <span className='text-2xl text-white ml-0'>{weather?.data?.current?.temp_f}°F</span>
                </div>
              </div>

              <div className='p-3 w-80 bg-slate-800 rounded-lg flex flex-row justify-center items-center leading-normal'>
              
                <div class="basis-1/4">

                  <i class="fa-solid fa-droplet text-4xl text-white basis-1/4"></i>
                </div>

                <div class="basis-1/2">
                  <span className='text-lg text-white flex '>Humidity</span>
                  <span className='text-2xl text-white ml-0'>{weather?.data?.current?.humidity}%</span>
                </div>
              </div>
              
              <div className='p-3 w-80 bg-slate-800 rounded-lg flex flex-row justify-center items-center leading-normal'>
                
                <div class="basis-1/4">
               
                  <i class="fa-solid fa-wind text-4xl text-white basis-1/4"></i>
                </div>

                <div class="basis-1/2">
                  <span className='text-lg text-white flex '>Wind</span>
                  <span className='text-2xl text-white ml-0'>{weather?.data?.current?.wind_kph} m/s</span>
                </div>
              </div>

            </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default App
