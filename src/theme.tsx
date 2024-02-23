import React from "react";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // 'dark' | 'light'
};
const theme = extendTheme({ config });

export default theme;
