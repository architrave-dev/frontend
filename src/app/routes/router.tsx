import { createBrowserRouter } from "react-router-dom";
import ArtistLanding from "src/pages/ArtistLanding";
import Projects from "src/pages/Projects";
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
        element: <Projects />,
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
