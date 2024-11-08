import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  SetStateAction,
} from "react";
import {
  Grid2,
  styled,
  Paper,
  Box,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { PieChart, useDrawingArea } from "@mui/x-charts";
import DashImages from "./Images";
import { DashChart } from "./Chart";
import DashTable from "./Table";
import { ArrayNumbers, randomNumber } from "../../../utils/Funcs";
import { leng } from "../../constants/DashImage";

export interface chartDataType {
  label: string;
  data: number[];
}

export const desktopOS = [
  {
    label: "Windows",
    value: 72.72,
  },
  {
    label: "OS X",
    value: 16.38,
  },
  {
    label: "Linux",
    value: 3.83,
  },
  {
    label: "Chrome OS",
    value: 2.42,
  },
  {
    label: "Other",
    value: 4.65,
  },
];

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
const DashIndex = () => {
  const theme = useTheme();

  const chartColors = [
    theme.palette.primary.light,
    theme.palette.error.light,
    theme.palette.secondary.light,
    theme.palette.warning.light,
    theme.palette.success.light,
    theme.palette.info.light,
  ];
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
      if (progress < 100) {
        setProgress(progress + 1);
        const newBuffer = progress + randomNumber(5, 1);
        setBuffer(newBuffer > 100 ? 100 : newBuffer);
      } else {
        clearInterval(timerRef.current);
      }
    };
  });

  const imageItems = imageData.map((e: any) => ({
    ...e,
    data: ArrayNumbers(250, leng, 120),
  }));
  const valueFormatter = (item: { value: number }) => `${item.value}%`;
  const [data, setData] = useState<chartDataType[]>([
    {
      data: imageItems[0].data,
      label: imageItems[0].title,
    },
    {
      data: ArrayNumbers(200, leng),
      label: "Others",
    },
  ]);

  const handleData = (value: chartDataType[]) => {
    setData(value);
  };
  return (
    <>
      <h1>DashBoard</h1>
      <Grid2
        container
        rowSpacing={{ xs: 5, md: 10 }}
        spacing={{ xs: 2, md: 4 }}
      >
        <DashImages imageData={imageItems} handleData={handleData}></DashImages>
        <DashChart data={data}></DashChart>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper variant="outlined" square={false} sx={{ padding: 3 }}>
            <PieChart
              height={450}
              tooltip={{ trigger: "item" }}
              colors={chartColors}
              slotProps={{
                legend: { hidden: true },
              }}
              sx={{ left: 0, right: 0, width: "100%" }}
              series={[
                {
                  innerRadius: 90,
                  outerRadius: 160,
                  data: desktopOS,
                  arcLabel: (params) => params.label ?? "",
                  arcLabelMinAngle: 20,
                  highlightScope: { fade: "global", highlight: "item" },
                  faded: {
                    innerRadius: 9,
                    additionalRadius: -22.5,
                    color: "gray",
                  },
                  valueFormatter,
                },
              ]}
            >
              <PieCenterLabel>ASD</PieCenterLabel>
            </PieChart>
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
            </Box>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Paper variant="outlined" square={false} sx={{ padding: 3 }}>
            <DashTable></DashTable>
          </Paper>
        </Grid2>
      </Grid2>
    </>
  );
};

const imageData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    data: ArrayNumbers(200, 8),
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

export default DashIndex;
