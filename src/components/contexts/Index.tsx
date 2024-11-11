import { useState, createContext, ReactNode } from "react";
import { clr } from "./themes/Index";
import { ColorContextType } from "./contexts";
import { themeType } from "./themes/theme";

export const ColorContext = createContext<ColorContextType>({
  color: clr.primary,
  handleColor: (value?: string) => {},
});

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<themeType>(clr.primary);
  const handleColor = (value?: string) => {
    switch (value) {
      case "primary":
        setColor(clr.primary);
        break;
      case "error":
        setColor(clr.error);
        break;
      case "secondary":
        setColor(clr.secondary);
        break;
      case "info":
        setColor(clr.info);
        break;
      case "success":
        setColor(clr.success);
        break;
      default:
        setColor(clr.warning);
        break;
    }
  };

  return (
    <ColorContext.Provider value={{ color, handleColor }}>
      {children}
    </ColorContext.Provider>
  );
};
