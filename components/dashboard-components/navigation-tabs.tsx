"use client"

export function NavigationTabs() {
  const tabs = ["All Course",]

  return (
    <div className="flex gap-6 border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-3 text-sm font-medium transition-colors ${
            tab === "Quiz" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
