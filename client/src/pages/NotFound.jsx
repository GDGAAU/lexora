import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-200 to-purple-200 text-center">
      <div>
        <h1 className="text-6xl font-bold text-indigo-700">404</h1>
        <p className="text-2xl mt-4 text-gray-700">Oops! Page Not Found.</p>
        <Link to="/" className="mt-4 text-indigo-500 hover:text-indigo-700">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
