import React, { useEffect, useState } from 'react'
import './style.css'
function Weather() {

    const [city,setCity]=useState(null)
    const [search,setSearch]=useState('delhi')
    useEffect(()=>{
        const weatherApi=async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9ef47964127e2288739375f81fd39f07`
            const res=await fetch(url);
            const response=await res.json()
            console.log(response)
            setCity(response.main)
        }


        weatherApi()
    },[search])

  return (
    <>
  <div className="weather-app">
      <div className="search-box">
        <input type="search"
        value={search}
        onChange={(e)=>{
          setSearch(e.target.value)  
        }}
        />
        
      </div>
      {!city ? (
        <p>Not Data</p>
      ):(

        <div className="weather-card">
        <h2 className="location">{search}</h2>
        <div className="temperature"><i className="fa-solid fa-cloud"></i>{city.temp}°C</div>
        <div className="max-min">
          <p>Max: {city.temp_max}°C</p>
          <p>Min: {city.temp_min}°C</p>
        </div>
      </div>

      )
      }
      
    </div>


  </>
  )
}

export default Weather




//https://api.openweathermap.org/data/2.5/weather?q=barhni&appid=9ef47964127e2288739375f81fd39f07