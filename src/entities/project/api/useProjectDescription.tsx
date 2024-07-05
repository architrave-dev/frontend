import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function useProjectDescription() {
  const queryResult = useQuery({ queryKey: [""], queryFn: () => {} });
  console.log(queryResult);
  return <div>useProjectDescription</div>;
}
