"use client"
import { MoreVertical } from "lucide-react"

interface CourseProps {
  course: {
    id: number
    title: string
    thumbnail: string
    enrolled: number
    accuracy: number
    completionRate: number
    category: string
    priority: string
    editedTime: string
    questions: number
    users: number
  }
}

export function CourseCard({ course }: CourseProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        <img src={course.thumbnail || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-gray-900 bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
          {course.enrolled} Enrolled
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-sm text-gray-900 mb-3 line-clamp-2">{course.title}</h3>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-teal-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                Accuracy <br /> {course.accuracy}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-teal-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                Completion <br /> {course.completionRate}%
              </span>
            </div>
          </div>

          <div className="flex gap-2 text-xs">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">{course.category}</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">{course.priority}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="text-xs text-gray-600">
            Edited {course.editedTime} ago • <span className="font-medium">{course.questions} Question</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {Array.from({ length: course.users }).map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"
                />
              ))}
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreVertical size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
