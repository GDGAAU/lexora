import { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import {
  LockIcon,
  MailIcon,
  LogInIcon,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react"; // Import Loader icon

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false); // State for loader

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setEmailError("");
    setLoading(true); // Start loader

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setEmailError("Email does not exist. Please check or sign up.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loader after request completes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with decorative element */}
          <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-3">
                <LogInIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          {/* Form content */}
          <div className="px-6 py-12 pt-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 w-full px-4 py-3 border ${
                    emailError ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 ${
                    emailError
                      ? "focus:ring-red-500 focus:border-red-500"
                      : "focus:ring-indigo-500 focus:border-transparent"
                  } transition-all`}
                  required
                  disabled={loading} // Disable input while loading
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              {/* Password Input */}
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
                  disabled={loading} // Disable input while loading
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading} // Disable button while loading
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              {/* General Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    disabled={loading} // Disable while loading
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit Button with Loader */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={() => navigate("/signup")}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Sign Up
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
  );
}

export default Login;
