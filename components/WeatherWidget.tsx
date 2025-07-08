"use client"

import { useState, useEffect } from "react"
import { Cloud, Sun, CloudRain, Wind, Thermometer } from "lucide-react"

interface WeatherData {
  location: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  icon: "sun" | "cloud" | "rain"
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate weather API call
    const fetchWeather = async () => {
      // In real app, this would be an actual weather API call
      setTimeout(() => {
        setWeather({
          location: "Langsa, Aceh",
          temperature: 28,
          condition: "Berawan",
          humidity: 75,
          windSpeed: 12,
          icon: "cloud",
        })
        setLoading(false)
      }, 1000)
    }

    fetchWeather()
  }, [])

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "sun":
        return <Sun className="w-8 h-8 text-yellow-500" />
      case "cloud":
        return <Cloud className="w-8 h-8 text-gray-500" />
      case "rain":
        return <CloudRain className="w-8 h-8 text-blue-500" />
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />
    }
  }

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    )
  }

  if (!weather) return null

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-semibold text-sm opacity-90">Cuaca Hari Ini</h3>
          <p className="text-xs opacity-75">{weather.location}</p>
        </div>
        {getWeatherIcon(weather.icon)}
      </div>

      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center space-x-1">
            <Thermometer className="w-4 h-4" />
            <span className="text-2xl font-bold">{weather.temperature}°C</span>
          </div>
          <p className="text-sm opacity-90">{weather.condition}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full opacity-75"></div>
          <span>Kelembaban: {weather.humidity}%</span>
        </div>
        <div className="flex items-center space-x-1">
          <Wind className="w-3 h-3" />
          <span>Angin: {weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  )
}
