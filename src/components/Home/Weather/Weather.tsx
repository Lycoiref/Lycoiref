'use client'
import { useEffect, useState } from 'react'

interface WeatherLive {
  province: string
  city: string
  adcode: string
  weather: string
  temperature: string
  winddirection: string
  windpower: string
  humidity: string
  reporttime: string
}

interface WeatherResponse {
  status: string
  count: string
  info: string
  infocode: string
  lives?: WeatherLive[]
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherLive | undefined>()

  useEffect(() => {
    const hangzhou = '330100'

    const params = new URLSearchParams({
      key: process.env.WEATHER_API_KEY,
      city: hangzhou,
    })
    fetch(`https://restapi.amap.com/v3/weather/weatherInfo?${params}`)
      .then((res) => res.json())
      .then((res: WeatherResponse) => {
        if (res.lives && res.lives.length > 0) {
          setWeather(res.lives[0])
        }
      })
  }, [])

  return (
    <>
      {/* Weather Widget */}
      <div className="rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">
                {weather?.city ?? '未知城市'}
              </h3>
              <p className="text-xs text-blue-100">
                {weather?.reporttime ?? '暂无数据'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">
                {weather?.temperature ? `${weather.temperature}°C` : '--°C'}
              </p>
              <p className="text-sm text-blue-100">
                {weather?.weather ?? '未知天气'}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-yellow-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium">
                  {weather?.weather ?? '未知'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  体感温度{' '}
                  {weather?.temperature
                    ? `${parseInt(weather.temperature) - 2}°C`
                    : '--°C'}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm">
                湿度: {weather?.humidity ? `${weather.humidity}%` : '--%'}
              </p>
              <p className="text-sm">
                风力: {weather?.windpower ? `${weather.windpower} 级` : '--'}
              </p>
              <p className="text-sm">
                风向: {weather?.winddirection ?? '未知'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
