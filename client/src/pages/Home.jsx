import React from 'react';
import Layout from "../layouts/Layout";
import Footer from '../components/common/Footer';
function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Welcome to the Learning Platform
        </h1>
        <p className="text-lg mb-4">
          Access your courses and certificates from the sidebar navigation.
        </p>
      </div>
    </Layout>
  );
}

export default Home;
