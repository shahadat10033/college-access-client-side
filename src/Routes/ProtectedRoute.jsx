import { Navigate, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";


const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { loader, user } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="text-center font-bold text-lg" style={{ minHeight: "80vh" }}>
        loading...........
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;