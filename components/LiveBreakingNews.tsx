"use client"

import { useState, useEffect } from "react"
import { AlertCircle, X } from "lucide-react"

interface BreakingNews {
  id: number
  title: string
  time: string
  urgent: boolean
}

export default function LiveBreakingNews() {
  const [news, setNews] = useState<BreakingNews[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Simulate live breaking news updates
  useEffect(() => {
    const breakingNews: BreakingNews[] = [
      {
        id: 1,
        title: "🔴 BREAKING: Gempa 6.2 SR Guncang Sumatra Barat, Tidak Ada Potensi Tsunami",
        time: "2 menit lalu",
        urgent: true,
      },
      {
        id: 2,
        title: "⚡ UPDATE: Presiden Jokowi Tiba di Aceh untuk Peresmian Infrastruktur",
        time: "15 menit lalu",
        urgent: false,
      },
      {
        id: 3,
        title: "🏆 OLAHRAGA: Timnas Indonesia Menang 3-1 Atas Thailand di Semifinal",
        time: "1 jam lalu",
        urgent: false,
      },
    ]

    setNews(breakingNews)

    // Auto-rotate news every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible || news.length === 0) return null

  const currentNews = news[currentIndex]

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 ${
        currentNews?.urgent ? "bg-red-600" : "bg-blue-600"
      } text-white shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              <span className="font-bold text-sm">BREAKING</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{currentNews?.title}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-xs opacity-75">{currentNews?.time}</span>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="h-1 bg-white bg-opacity-30">
        <div
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((currentIndex + 1) / news.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
