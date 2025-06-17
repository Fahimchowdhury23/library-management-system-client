import React, { use } from "react";
import Spinner from "../Components/Spinner.jsx/Spinner";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
