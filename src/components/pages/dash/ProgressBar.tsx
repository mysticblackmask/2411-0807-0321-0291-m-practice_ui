import React, { useState, useRef, useEffect, FC } from "react";
import { randomNumber } from "../../../utils/Funcs";
import { Box, LinearProgress, Typography } from "@mui/material";

interface DashProgressBarProps {
  pgr: number;
}

const DashProgressBar: FC<DashProgressBarProps> = ({ pgr }) => {
  const [progress, setProgress] = useState<number>(0);
  const [buffer, setBuffer] = useState<number>(1);
  const timerRef = useRef<number>(0);
  const progressRef = useRef(() => {});
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      progressRef.current();
    }, 150);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  useEffect(() => {
    progressRef.current = () => {
      if (progress < pgr) {
        setProgress(progress + 1);
        const newBuffer = progress + randomNumber(5, 1);
        setBuffer(newBuffer > pgr ? pgr : newBuffer);
      } else {
        clearInterval(timerRef.current);
      }
    };
  });
  return (
    <>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{ height: 10, borderRadius: 5 }}
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </Box>
      <Box>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >{`${Math.round(progress)}%`}</Typography>
      </Box>
    </>
  );
};

export default DashProgressBar;
