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
             <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} sx={{
    input: { color: "white" },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.3)"
      },
      "&:hover fieldset": {
        borderColor: "rgba(255,255,255,0.5)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(255,255,255,0.7)"
      }
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.6)"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white"
    } }} />
             <br /><br />
            <Button variant="contained" sx={{
    backdropFilter: "blur(25px)",
    WebkitBackdropFilter: "blur(25px)",

    background: "rgba(255, 255, 255, 0.08)",
    color: "white",

    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "14px",

    boxShadow: `
      0 8px 25px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.3)
    `,

    "&:hover": {
      background: "rgba(255, 255, 255, 0.15)",
      boxShadow: `
        0 12px 35px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.4)
      `
    }
  }}  type="submit">
            Search
            </Button>
            {error && <p style={{color:"red"}}>City not found. Please try again.</p>}
            </form>
        </div>
    );
}