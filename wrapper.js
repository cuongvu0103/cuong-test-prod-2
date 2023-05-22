import React from "react";
import Layout from "./layout";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export const wrapPageElement = ({ element }) => {
  const muiTheme = createTheme({
    palette: { primary: { main: "rgba(0,0,0,1)" } },
  });
  const theme = extendTheme({
    styles: { global: { img: { maxWidth: "unset" } } },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <ChakraProvider theme={theme}>
        <Layout>{element}</Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
};
