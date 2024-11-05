import React, { FC, useState } from "react";
import { Toolbar, CssBaseline, Box } from "@mui/material";
import { Main } from "../components/styles/Index";

import LayoutHeader from "../components/layouts/Header";
import LayoutSider from "../components/layouts/Sider";

const RoutesIndex: FC = () => {
  const [open, setOpen] = useState(0);

  const handleDrawer = (value: number) => {
    setOpen((pre) => value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <LayoutHeader open={open} handleDrawer={handleDrawer} />
      <LayoutSider open={open} handleDrawer={handleDrawer} />
      <Main open={open > 0 ? true : false}>
        <Toolbar id="back-to-top-anchor" />
      </Main>
    </Box>
  );
};

export default RoutesIndex;
