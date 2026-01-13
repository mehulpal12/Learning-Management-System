"use client"

import { Home, ImageIcon, Users, FolderOpen, Settings, Plus, Zap } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="text-white text-lg font-bold">F</span>
          </div>
          <h1 className="font-bold text-lg">Learning Content</h1>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <Home size={20} />
            <span className="text-sm">Recents</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <Users size={20} />
            <span className="text-sm">Shared Content</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <FolderOpen size={20} />
            <span className="text-sm">Archived</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
            <ImageIcon size={20} />
            <span className="text-sm">Templates</span>
          </div>
        </nav>

        {/* Favorites */}
        <div>
          <div className="flex items-center justify-between px-2 mb-3">
            <h3 className="text-xs font-bold text-gray-700 uppercase">Favorites</h3>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">3</span>
          </div>
          <div className="space-y-2">
            {["Figma Basic", "Folder NEW 2024", "Assignment 101"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-400 to-blue-400"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center justify-between px-2 mb-3">
            <h3 className="text-xs font-bold text-gray-700 uppercase">Projects</h3>
            <Plus size={16} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <div className="w-4 h-4 rounded bg-purple-500"></div>
              <span className="text-sm">Figma basic</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <div className="w-4 h-4 rounded bg-pink-500"></div>
              <span className="text-sm">Fikri studio</span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="space-y-2 pt-4 border-t border-gray-200">
          <button className="w-full bg-purple-600 text-white rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-purple-700">
            <Plus size={16} />
            <span className="text-sm font-medium">New</span>
          </button>
          <button className="w-full bg-orange-400 text-white rounded-lg p-2 flex items-center justify-center gap-2 hover:bg-orange-500">
            <Zap size={16} />
            <span className="text-sm font-medium">AI</span>
          </button>
          <button className="w-full border border-gray-200 text-gray-700 rounded-lg p-2 flex items-center justify-center hover:bg-gray-50">
            <Settings size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
