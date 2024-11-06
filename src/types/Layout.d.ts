import { MouseEvent } from "react";
export type MouseClickFunction = (event: MouseEvent<HTMLElement>) => void;
export interface LayoutProps {
  open: number;
  handleDrawer: (value: number) => void;
}
export interface menuDataType {
  text: string;
}
export interface mobileDataType {
  text: string;
  badge?: number;
  icon: ReactNode;
  func: MouseClickFunction;
  url?: string;
}
