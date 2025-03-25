
import { useState } from "react"
import { auth } from "../../firebase/Firebase"
import { useNavigate } from "react-router-dom"
import { LockIcon, MailIcon, UserIcon, Eye, EyeOff } from "lucide-react"

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await auth.createUserWithEmailAndPassword(email, password)  
      navigate("/home")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with decorative element */}
          <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-3">
                <UserIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          {/* Form content */}
          <div className="px-6 py-12 pt-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={() => navigate("/login")}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Log In
                </a>
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-indigo-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

