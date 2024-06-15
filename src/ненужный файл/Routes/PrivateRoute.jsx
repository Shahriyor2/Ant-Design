import { Navigate, Outlet } from "react-router";

export const PrivateRoute = ({ role }) => {
  const tokenName = localStorage.getItem("token").user;
  return role.includes(tokenName) ? <Outlet /> : <Navigate to="/login" />;
};
