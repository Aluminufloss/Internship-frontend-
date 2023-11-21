import React from "react";
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks/hook";

type ProtectedRouteProps = {
  children: React.ReactNode,
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const user = useAppSelector((state) => state.authentication.isAuth);

  if(!user) {
    return <Navigate to="/login" replace />
  }

  return <>{props.children}</>;
};

export default ProtectedRoute;