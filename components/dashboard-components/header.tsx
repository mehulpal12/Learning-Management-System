"use client"

import { ChevronLeft, Upload } from "lucide-react"

export function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ChevronLeft className="text-gray-400 cursor-pointer" size={24} />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">FK</span>
            </div>
            <h2 className="font-bold text-xl">Fikri Studio</h2>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded font-medium">RF</span>
            <div className="flex gap-1 ml-2">
              {["🟠", "👥", "⭐"].map((icon, i) => (
                <span key={i} className="text-lg">
                  {icon}
                </span>
              ))}
            </div>
            <Plus size={20} className="text-gray-400 cursor-pointer ml-2" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Upload size={18} />
            <span className="text-sm font-medium">Upload</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Plus size={18} />
            <span className="text-sm font-medium">New Content</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Plus({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )
}
