'use client'
import { useEffect, useState } from 'react'

interface WeatherData {
  city: string
  temperature: string
  weather: string
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData>({
    city: '',
    temperature: '',
    weather: '',
  })

  useEffect(() => {
    const hangzhou = '330100'

    const params = new URLSearchParams({
      key: process.env.WEATHER_API_KEY,
      city: hangzhou,
    })
    fetch(`https://restapi.amap.com/v3/weather/weatherInfo?${params}`)
      .then((res) => res.json())
      .then((res) => {
        setWeather(res.lives[0])
      })
  }, [])

  return (
    <>
      <div className="weather">
        <div className="city">{weather.city}</div>
        <div className="info">
          <div className="temperature">{weather.temperature}℃</div>
          <div className="weather">{weather.weather}</div>
        </div>
      </div>
    </>
  )
}
