import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function ProtectedRoutes({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  const handleRefreshToken = async () => {
    try {
      const response = await api.post("/api/token/refresh/", {
        refresh: localStorage.getItem(REFRESH_TOKEN),
      });
      localStorage.setItem(ACCESS_TOKEN, response.data.access);
      return true;
    } catch (error) {
      console.error("Error refreshing token:", error);
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      return false;
    }
  };

  const checkAuth = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    if (!accessToken || !refreshToken) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const decoded = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        const isRefreshed = await handleRefreshToken();
        setIsAuthenticated(isRefreshed);
        return;
      }
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error decoding token:", error);
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isAuthenticated === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return isAuthenticated ? children || <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;