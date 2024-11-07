import React, { useContext, useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ColorContext } from "../../contexts/Index";

interface colorDataType {
  color: string;
  text: string;
}
const Index = () => {
  const contextColor = useContext(ColorContext);
  const [clr, setClr] = useState<string>(contextColor?.color.back);
  const handleChange = (event: SelectChangeEvent) => {
    setClr(event.target.value);
    contextColor?.handleColor(event.target.value);
  };
  const colorData: colorDataType[] = [
    { color: "primary", text: "Blue" },
    { color: "info", text: "Sky" },
    { color: "success", text: "Green" },
    { color: "error", text: "Red" },
    { color: "warning", text: "Yellow" },
    { color: "secondary", text: "Pink" },
  ];
  return (
    <div>
      <h1>Setting</h1>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel
          id="demo-select-small-label"
          color={contextColor?.color.back}
        >
          Color
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={clr}
          color={contextColor?.color.back}
          label="Color"
          onChange={handleChange}
        >
          {colorData.map((list: colorDataType, index: number) => (
            <MenuItem key={index} value={list.color}>
              {list.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Index;
