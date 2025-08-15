import type {FC} from 'react'
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: FC = () => {
  const isAuthenticated = true; // temporal, luego vendrá de tu AuthContext o similar

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
