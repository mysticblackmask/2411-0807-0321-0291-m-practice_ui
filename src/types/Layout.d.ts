import { MouseEvent } from "react";
export type MouseClickFunction = (event: MouseEvent<HTMLElement>) => void;
export interface LayoutProps {
  open: number;
  handleDrawer: (value: number) => void;
}
