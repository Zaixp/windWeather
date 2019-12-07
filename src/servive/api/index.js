import ajax from "./ajax";

const key='4e0de8a83fc945389586df00e250510a';
const BASE_URL='https://free-api.heweather.net/s6/weather'
const cn='cn';
export const getNowData=(location)=>ajax(BASE_URL+'/now',{location,key});
export const getForecastData=(location)=>ajax(BASE_URL+'/forecast',{location,key});
export const getAirData=(location)=>ajax('https://free-api.heweather.net/s6/air/now',{location,key});
export const getLifeStyleData=(location)=>ajax(BASE_URL+'/lifestyle',{location,key});
export const getHourlyData=(location)=>ajax(BASE_URL+'/hourly',{location,key});
export const getHotCityData=()=>ajax('https://search.heweather.net/top',{cn,key});
export const getCityData=(location)=>ajax('https://search.heweather.net/find',{location,key});

