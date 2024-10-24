import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
    isAuthenticated: boolean;
}



export const LoggedInGuard: React.FC<PrivateRouteProps> = ({isAuthenticated}) => {
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}
