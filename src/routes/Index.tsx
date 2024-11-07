import React, { FC, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toolbar, CssBaseline, Box } from "@mui/material";
import { Main } from "../components/styles/Index";
import { routeDataType } from "../types/Routes";

import LayoutHeader from "../components/layouts/Header";
import LayoutSider from "../components/layouts/Sider";
import DashIndex from "../components/pages/dash/Index";
import SignIn from "../components/pages/auth/SignIn";

import { RouteIndexHooks } from "../components/hooks/Index";
import { RouteIndexData } from "../components/constants/Index";

const RoutesIndex: FC = () => {
  const [open, handleDrawer, ProtectedRoute] = RouteIndexHooks(0) as [
    number,
    (value: number) => void,
    ReactNode
  ];
  const routeData = RouteIndexData();
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <LayoutHeader open={open} handleDrawer={handleDrawer} />
        <LayoutSider open={open} handleDrawer={handleDrawer} />
        <Main open={open > 0 ? true : false}>
          <Toolbar id="back-to-top-anchor" />
          <Routes>
            {routeData.map((route: routeDataType, index: number) => (
              <Route key={index} element={ProtectedRoute}>
                <Route path={route.url} element={route.component} />
              </Route>
            ))}
            <Route path="/" element={<DashIndex />} />
            <Route path="/dash" element={<DashIndex />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </Main>
      </Box>
    </Router>
  );
};

export default RoutesIndex;
