import { Sidebar } from "@/components/dashboard-components/sidebar"
import { Header } from "@/components/dashboard-components/header"
import { NavigationTabs } from "@/components/dashboard-components/navigation-tabs"
import { FilterBar } from "@/components/dashboard-components/filter-bar"
import { CourseCard } from "@/components/dashboard-components/course-card"

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Mastering UI Design for Impactful Solutions",
      thumbnail: "/ui-design-course-yellow-blue.jpg",
      enrolled: 10,
      accuracy: 40,
      completionRate: 60,
      category: "UI/UX",
      priority: "Not Urgent",
      editedTime: "2h",
      questions: 10,
      users: 3,
    },
    {
      id: 2,
      title: "A Symphony of Colors in UI Design",
      thumbnail: "/color-design-ui-course-blue-orange.jpg",
      enrolled: 21,
      accuracy: 20,
      completionRate: 80,
      category: "Instructional Design",
      priority: "Not Urgent",
      editedTime: "8h",
      questions: 15,
      users: 3,
    },
    {
      id: 3,
      title: "Bridging Users and UI in Design Harmony",
      thumbnail: "/ux-design-harmony-purple-orange.jpg",
      enrolled: 18,
      accuracy: 100,
      completionRate: 100,
      category: "Experience Design",
      priority: "Urgent",
      editedTime: "23h",
      questions: 25,
      users: 3,
    },
    {
      id: 4,
      title: "Creating Engaging Learning Journeys: UI/UX Best Practices",
      thumbnail: "/learning-journey-ui-ux-heart-design.jpg",
      enrolled: 9,
      accuracy: 20,
      completionRate: 100,
      category: "UI/UX",
      priority: "Urgent",
      editedTime: "5d",
      questions: 30,
      users: 3,
    },
    {
      id: 5,
      title: "Designing Intuitive User Interfaces",
      thumbnail: "/intuitive-user-interface-design-yellow.jpg",
      enrolled: 12,
      accuracy: 80,
      completionRate: 80,
      category: "User Interface (UI)",
      priority: "Not Urgent",
      editedTime: "2d",
      questions: 15,
      users: 3,
    },
    {
      id: 6,
      title: "Optimizing User Experience in Educational Platforms",
      thumbnail: "/optimizing-user-experience-education-purple.jpg",
      enrolled: 7,
      accuracy: 0,
      completionRate: 0,
      category: "User Experience",
      priority: "Urgent",
      editedTime: "6d",
      questions: 25,
      users: 3,
    },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6">
          <NavigationTabs />
          {/* <FilterBar /> */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-600">{courses.length} content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
