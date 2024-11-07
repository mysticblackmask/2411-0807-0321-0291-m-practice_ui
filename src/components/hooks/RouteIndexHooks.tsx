import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const RouteIndexHooks = (value: number) => {
  const [open, setOpen] = useState(0);
  const isLogined = useAppSelector((state) => state.auth.isAuthenticated);
  const handleDrawer = (value: number) => {
    setOpen((pre) => value);
  };
  useEffect(() => {
    handleDrawer(0);
  }, [isLogined]);

  const ProtectedRoute = isLogined ? <Outlet /> : <Navigate to="/signin" />;

  return [open, handleDrawer, ProtectedRoute];
};

export default RouteIndexHooks;
