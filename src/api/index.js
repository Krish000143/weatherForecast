const baseURL= "https://api.weatherapi.com/v1/current.json?key=8a4355f6d7314c57917143859242904"

const apiKey="15de4daee11f5c4519f4a834a1497fd5";

const fetchApi="https://api.openweathermap.org/data/2.5/weather?";

export const getdataforWeather = async (city) => {
    const response = await fetch(`${fetchApi}&q=${city}&appid=${apiKey}`)
    return await response.json();
};


export const getdataforCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&api=yes`)
    return await response.json();
};

export const getdataforLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&api=yes`)
    return await response.json();
};