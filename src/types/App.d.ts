import { ReactElement } from "react";
export interface ScrollProps {
  window?: (() => Window) | undefined;
  children?: ReactElement;
}
