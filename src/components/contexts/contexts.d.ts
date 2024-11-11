export interface themeType {
  back: string;
  badge: string;
}

export interface clrType {
  primary: themeType;
  error: themeType;
  info: themeType;
  secondary: themeType;
  success: themeType;
  warning: themeType;
}

export type ColorContextType = {
  color: any;
  handleColor: (value?: string) => void;
};
