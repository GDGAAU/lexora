import { Sidebar } from "./Sidebar"
import Navbar from '../components/Navbar'
export function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navbar/>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}

