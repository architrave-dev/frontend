import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

// TODO : after tanstackQuery,
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
