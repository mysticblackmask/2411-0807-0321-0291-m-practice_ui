import React, { FC } from "react";
import { Grid2, Paper, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { chartDate } from "../../constants/DashImage";

interface DashChartProps {
  data: {
    data: number[];
    label: string;
  }[];
}

export const DashChart: FC<DashChartProps> = (props) => {
  return (
    <Grid2 size={{ xs: 12, md: 6 }}>
      <Paper variant="outlined" square={false} sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ color: "text.secondary" }}>
          Marketing...
        </Typography>
        <LineChart
          xAxis={[
            {
              data: [...chartDate],
              scaleType: "point",
            },
          ]}
          series={props.data}
          height={512}
        />
      </Paper>
    </Grid2>
  );
};
