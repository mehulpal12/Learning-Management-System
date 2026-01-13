import Navbar from "./navbar/page";
import Dashboard from './dashboard/page'
export default function Home() {
  return (
    <div className=" min-h-screen  justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Dashboard />
    </div>
  );
}
