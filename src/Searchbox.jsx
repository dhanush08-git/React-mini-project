import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ff422cc1088141fbca6ea68cc770900b";


    let getWeatherInfo = async() =>{
        try {
            let response= await fetch(`${API_URL}?q=${city}&limit=1&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result = {
        city:city,
        temp:jsonResponse.main.temp,
        temp_min:jsonResponse.main.temp_min,
        temp_max:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
        }catch(error){
            console.log(error);
            throw error
        }
       
    };
    

    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit = async(event) =>{
        try{
            event.preventDefault();
        console.log(`You searched for ${city}`);
        setCity("");
        let info = await getWeatherInfo({updateInfo});
        updateInfo(info);
        }catch(error){
            setError(true);
        }
        
    };

    return (
        <div className='Searchbox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit} action="">
             <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
             <br /><br />
            <Button variant="contained" type="submit">
            Search
            </Button>
            {error && <p style={{color:"red"}}>City not found. Please try again.</p>}
            </form>
        </div>
    );
}