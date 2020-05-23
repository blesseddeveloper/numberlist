import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import ListCard from "./ListCard";
import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ListCard />
  </ThemeProvider>
);

export default App;
