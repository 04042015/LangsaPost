"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CloudSun, MapPin, Thermometer } from "lucide-react"

interface WeatherData {
  temp: number
  city: string
  description: string
}

/**
 * NOTE:
 * - Komponen ini hanya demo; ganti dengan fetch ke API cuaca (OpenWeatherMap, dsb.)
 * - Diletakkan di `components/WeatherWidget.tsx` supaya path import di `app/page.tsx`
 *   (`@/components/WeatherWidget`) valid.
 */
export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    // TODO: fetch API cuaca di production
    // Mock data
    setWeather({
      temp: 30,
      city: "Langsa",
      description: "Cerah Berawan",
    })
  }, [])

  if (!weather) return null

  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <CloudSun className="h-5 w-5 text-yellow-500" />
        <CardTitle>Cuaca Hari Ini</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-red-500" />
          <span className="text-2xl font-bold">{weather.temp}°C</span>
        </div>
        <div className="text-right">
          <p className="text-sm capitalize">{weather.description}</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {weather.city}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
