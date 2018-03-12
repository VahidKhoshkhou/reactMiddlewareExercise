import axios from "axios";


const API_KEY='77a31c7345fe96457d7548dbc5a7fd4b';
const ROOT_URL=`http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER='FETCH_WEATHER';
// action creator 
export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},us`;
    const request= axios.get(url);

    return {
        type: FETCH_WEATHER,
        paload: request
    }
}