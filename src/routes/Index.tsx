import React, { FC, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Toolbar, CssBaseline, Box } from "@mui/material";
import { Main } from "../components/styles/Index";
import { useAppSelector } from "../redux/store";

import LayoutHeader from "../components/layouts/Header";
import LayoutSider from "../components/layouts/Sider";
import DashIndex from "../components/pages/dash/Index";
import SignIn from "../components/pages/auth/SignIn";
import SettingIndex from "../components/pages/settings/Index";

const RoutesIndex: FC = () => {
  const [open, setOpen] = useState(0);
  const isLogined = useAppSelector((state) => state.auth.isAuthenticated);
  const handleDrawer = (value: number) => {
    setOpen((pre) => value);
  };
  useEffect(() => {
    handleDrawer(0);
  }, [isLogined]);

  const ProtectedRoute = () => {
    return isLogined ? <Outlet /> : <Navigate to="/signin" />;
  };
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <LayoutHeader open={open} handleDrawer={handleDrawer} />
        <LayoutSider open={open} handleDrawer={handleDrawer} />
        <Main open={open > 0 ? true : false}>
          <Toolbar id="back-to-top-anchor" />
          <Routes>
            <Route element={ProtectedRoute()}>
              <Route path="/setting" element={<SettingIndex />} />
            </Route>
            <Route path="/" element={<DashIndex />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </Main>
      </Box>
    </Router>
  );
};

export default RoutesIndex;
