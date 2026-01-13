import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function InstructorDashboard() {
  // Protect the page from users who are not admins
  const isAdmin = await checkRole('INSTRUCTOR')
  if (!isAdmin) {
      return <p>you are not a INSTRUCTOR sorry</p>
  }

  return <p>This is the protected admin dashboard restricted to users with the `admin` Role.</p>
}