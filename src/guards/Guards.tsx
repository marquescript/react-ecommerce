import { Navigate, Outlet, } from "react-router-dom";

interface PrivateRouteProps {
    isAuthenticated: boolean;
}

export const LoggedInGuard: React.FC<PrivateRouteProps> = ({isAuthenticated}) => {
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}

export const CheckoutGuard: React.FC<PrivateRouteProps> = ({isAuthenticated}) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" /> ;
}