import React, { FC } from "react";
import {
  Grid2,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { ArrayNumbers } from "../../../utils/Funcs";
import { Info } from "@mui/icons-material";
import { leng as chartDataleng } from "../../constants/DashImage";
import { chartDataType } from "./Index";
interface imageDataType {
  img: string;
  title: string;
  rows?: number;
  cols?: number;
  author?: string;
  data: number[];
}

interface DashImagesProps {
  imageData: imageDataType[];
  handleData: (value: chartDataType[]) => void;
}

const DashImages: FC<DashImagesProps> = (props) => {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Paper variant="outlined" square={false} sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ color: "text.secondary" }}>
            Food
          </Typography>
          <Typography>
            Do you want to continue? Click <Info />
          </Typography>
          <ImageList
            sx={{ height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {props.imageData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                      onClick={() => {
                        props.handleData([
                          { data: item.data, label: item.title },
                          {
                            data: ArrayNumbers(200, chartDataleng),
                            label: "Others",
                          },
                        ]);
                      }}
                    >
                      <Info />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Paper>
      </Grid2>
    </>
  );
};

export default DashImages;
