"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';

const breakingNews = [
  "Pemerintah mengumumkan kebijakan baru untuk mendukung ekonomi digital",
  "Tim nasional Indonesia berhasil meraih medali emas di kejuaraan internasional",
  "Investasi teknologi AI meningkat 200% dalam kuartal ini",
  "Program vaksinasi nasional mencapai target 85% populasi",
];

export function BreakingNews() {
  return (
    <div className="bg-coral text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-2 mr-4 flex-shrink-0">
            <AlertTriangle className="h-4 w-4" />
            <span className="font-semibold text-sm">BREAKING NEWS</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="breaking-news whitespace-nowrap">
              {breakingNews.map((news, index) => (
                <span key={index} className="inline-block mr-12 text-sm">
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}