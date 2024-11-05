import React, { FC, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toolbar, CssBaseline, Box } from "@mui/material";
import { Main } from "../components/styles/Index";

import LayoutHeader from "../components/layouts/Header";
import LayoutSider from "../components/layouts/Sider";
import DashIndex from "../components/pages/dash/Index";

const RoutesIndex: FC = () => {
  const [open, setOpen] = useState(0);

  const handleDrawer = (value: number) => {
    setOpen((pre) => value);
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
            <Route path="/" element={<DashIndex />} />
          </Routes>
        </Main>
      </Box>
    </Router>
  );
};

export default RoutesIndex;
