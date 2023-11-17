import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    lightGrey: "#b9b9b9",
    primary: "#FABB18",
    primaryDark: "#F1B006",
  },
  fontSizes: {
    small: "10px",
    mediumSmall: "12px",
    medium: "16px",
    mediumLarge: "24px",
    large: "32px"
  }
};

type ThemeProps = {
  children?: ReactNode;
}

const Theme: React.FC<ThemeProps> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme;