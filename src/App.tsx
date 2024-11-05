import React, { FC } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RoutesIndex from "./routes/Index";
import { ScrollTopHook } from "./components/hooks/Index";

const App: FC = () => {
  return (
    <>
      <RoutesIndex />
      <ScrollTopHook>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTopHook>
    </>
  );
};

export default App;
