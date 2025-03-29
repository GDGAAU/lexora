import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <p>404 Not Found</p>;
  if (!user) return <Navigate to="/not-found" replace />;

  return <Outlet />;
}
