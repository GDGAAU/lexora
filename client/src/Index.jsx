import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Index() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/home"); // Redirect logged-in users
    }
  }, [user, navigate]);

  return (
    <div>
      <div>
        <ul>
          <li>Lexora</li>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <button>Sign in</button>
          </li>
        </ul>
      </div>
      <section>
        <h2>Hero section</h2>
      </section>
    </div>
  );
}

export default Index;
