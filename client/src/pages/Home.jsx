import React from "react";
import Layout from "../layouts/Layout";

function Home() {
  return (
    <Layout>
      <div className="relative w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Welcome to the  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Learning Platform
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Access your courses and certificates from the sidebar navigation.
        </p>
      </div>
    </Layout>
  );
}

export default Home;
