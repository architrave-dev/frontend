import { useLocation } from "react-router-dom";

export default function useCurrentPath(pathMap: Record<string, boolean>) {
  const { pathname } = useLocation();
  const resultMap = { ...pathMap };
  Object.keys(resultMap).forEach((path) => {
    if (pathname.startsWith(path)) {
      resultMap[path] = true;
    }
  });
  return resultMap;
}
