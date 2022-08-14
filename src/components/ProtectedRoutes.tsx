import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode | JSX.Element;
};

export default function ProtectedRoutes({children}: Props) {
  const getLoggedIn = () => {
    const token = localStorage.getItem("token") || null;
    if (token == null) {
      return false;
    }
    return true;
  };
  return getLoggedIn() ? children : <Navigate to="/login" replace />;

}
