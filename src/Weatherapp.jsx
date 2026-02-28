import Searchbox from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react"

export default function Weatherapp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        temp: 30,
        humidity: 80,
        pressure: 1013,
        windSpeed: 10,
        temp_min: 25,
        temp_max: 35,
        feelsLike: 32
    } );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <>
        <Searchbox updateInfo={updateInfo}/>
        <Infobox info={weatherInfo}/>
        </>
    )
}