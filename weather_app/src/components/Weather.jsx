import { useEffect } from "react";
import { useState } from "react";

export function Weather(){
    const [city,setCity] = useState("Kampala");
    const [value,setValue] = useState("Kampala");
    const appKey = import.meta.env.VITE_APP_KEY;
    const [weatherData,setWeatherData] = useState(false)
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${appKey}`
    

    const onValueChange = (e)=>{
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!value){
            return alert("Please enter the city");
        }
        setWeatherData(false);

        search();
    }
    // Formatting the date
    const formatDate = () => {
        const date = new Date();
        const options = { month: "short", day: "numeric" };
        return date.toLocaleDateString("en-GB", options).toUpperCase();
    };

    // Formatting the day
    const formatDay = () => {
        const date = new Date();
        const options = { weekday: "long" };
        return date.toLocaleDateString("en-GB", options).toUpperCase();
    };

    const search = ()=>{
        fetch(url).then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            return res.json();
        })
        .then(({main,wind,weather,sys,name})=>{
            setWeatherData({name,main,wind,weather,sys})
            console.log(weatherData);
        }).catch((error) => {
            console.error('Error:', error);
            alert(`Error fetching weather data: ${error.message}`);
            
        });
    }

    // const search = ()=>{
    //     fetch(url).then((res)=>{
    //         return res.json();
    //     })
    //     .then((data)=>{
    //         setWeatherData(data)
    //         console.log(weatherData);
    //     })
    // }

    // useEffect(search,[])

    return (
        <div className="container glass-effect">
            {/* <h1>Weather</h1> */}
            <form action="#" onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onValueChange}/>
                <button type="submit"><i className="ri-search-2-line"></i></button>
            </form>

            {weatherData && (
                <div className="card">
                    <div className="card-header">
                        <div className="city-data">
                            <div className="city">{weatherData.name}</div>
                            <div className="country">{weatherData.sys.country}</div>
                        </div>
                        <div className="date-data">
                            <div className="date">{formatDate()}</div>
                            <div className="day">{formatDay()}</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="temp">{Math.round(weatherData.main.temp)}°</div>
                        <div className="icon">
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={`${weatherData.weather[0].description}`} />
                            <span>{weatherData.weather[0].main.toUpperCase()}</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="humidity">
                            <i className="ri-water-percent-line"></i>
                            <span>{weatherData.main.humidity}%</span>
                        </div>
                        <div className="wind">
                        <i className="ri-windy-line"></i>
                            <span>{Math.round(weatherData.wind.speed * 3.6)}km/h</span>
                        </div>
                        <div className="metric">C° F°</div>
                    </div>
                
                </div>
            )
            }
        </div>
    )
}