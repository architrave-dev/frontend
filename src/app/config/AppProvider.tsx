import { router } from "@routes/router";
import queryClient from "@shared/queryClient";
import { GlobalStyle } from "@styles/globalStyle";
import { theme } from "@styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

export default function AppProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
