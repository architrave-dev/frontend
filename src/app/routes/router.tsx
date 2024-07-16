import Project from "@pages/Project";
import { createBrowserRouter } from "react-router-dom";
import ArtistLanding from "src/pages/ArtistLanding";
import GlobalNavigation from "src/widgets/GlobalNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalNavigation />,
    children: [
      {
        index: true,
        element: <ArtistLanding />,
      },
      {
        path: "projects",
        element: <Project />,
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
        path: "login",
        element: <div></div>,
      },
    ],
  },
]);

export { router };
