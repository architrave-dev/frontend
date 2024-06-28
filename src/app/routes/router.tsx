import { createBrowserRouter } from "react-router-dom";
import App from "src/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <div></div>,
  },
  {
    path: "works",
    element: <div></div>,
  },
  {
    path: "about",
    element: <div></div>,
  },
  {
    path: "contact",
    element: <div></div>,
  },
  {
    path: "contact",
    element: <div></div>,
  },
  {
    path: "login",
    element: <div></div>,
  },
]);

export { router };
