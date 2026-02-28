
import './Infobox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';


export default  function Infobox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1623044403422-41fc6628beb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL="https://images.unsplash.com/photo-1687095951902-31ec078b1a68?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const COLD_URL="https://images.unsplash.com/photo-1632261845530-5ae1f3dc5c6c?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const RAIN_URL="https://images.unsplash.com/photo-1699212783038-5ca8959f5957?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return (
        <div className="Infobox">
            <h2 className="gtext">Weather Information</h2>
            <Card sx={{
    background: "rgba(18, 2, 2, 0.06)",
    backdropFilter: "blur(35px)",
    WebkitBackdropFilter: "blur(35px)",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    color: "white"
  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL 
          : info.temp>30? HOT_URL 
          : info.temp<10? COLD_URL : INIT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
          {info.city}{info.humidity>80
          ? <ThunderstormIcon />
          : info.temp>30? <SunnyIcon />
          : <AcUnitIcon /> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature={info.temp}°C</p>
          <p>Humidity={info.humidity}%</p>
          <p>Min Temp={info.temp_min}°C</p>
          <p>Max Temp={info.temp_max}°C</p>
          <p>The weather feels like {info.feelsLike}°C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}