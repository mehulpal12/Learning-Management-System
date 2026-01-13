import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    
      <div className="grid min-h-screen place-items-center bg-zinc-50 px-4 py-12">
          <SignIn />
          </div>
  )
}