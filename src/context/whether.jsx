import { createContext, useContext, useState } from "react";
import {getdataforCity, getdataforLocation, getdataforWeather} from '../api/index'


const weatherContext = createContext(null)

export const useWeather = () => {
    return useContext(weatherContext);
};

export const WeatherProvider = (props) =>{
    const [data, setData] = useState(null)
    const [searchCity, setsearchCity]  = useState(null)

    const fetchdata = async() => {
        const res = await getdataforCity(searchCity)
        setData(res);
    }

    const fetchCurrentuserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getdataforLocation(position.coords.latitude, position.coords.longitude).then((data) => setData(data));
            //console.log(position);
        });
    };
return (
    <weatherContext.Provider value={{searchCity,data, setsearchCity, fetchdata, fetchCurrentuserLocation}}>
        {props.children}
    </weatherContext.Provider>
)
}