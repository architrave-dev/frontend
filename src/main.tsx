import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@styles/globalStyle.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/themes.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "@routes/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
