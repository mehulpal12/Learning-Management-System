"use client"

import { Search, Settings, List, Grid2x2 } from "lucide-react"

export function FilterBar() {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <span>Total Question: 5 or more</span>
            <button className="ml-1">×</button>
          </div>
          <button className="text-purple-600 text-sm font-medium hover:underline">Reset</button>
          <button className="flex items-center gap-1 text-gray-600 text-sm hover:text-gray-900">
            <Settings size={16} />
            Add Filter
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-600 hover:text-gray-900">
            <Settings size={18} />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <Grid2x2 size={18} />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <List size={18} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm font-medium text-gray-600">100 content</div>
        <div className="flex-1 relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  )
}
