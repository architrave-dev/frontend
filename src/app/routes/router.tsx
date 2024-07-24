import Landing from "@pages/Landing";
import Project from "@pages/Project";
import ProjectCreate from "@pages/ProjectCreate";
import { createBrowserRouter } from "react-router-dom";
import ArtistLanding from "src/pages/ArtistLanding";
import GlobalNavigation from "src/widgets/GlobalNavigation";
//
// const tempRoot = {
//   path: "/",
//   element: "LandingPage",
//   page: "temp",
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/projects",
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
        path: "projects/new",
        element: <div>new page</div>,
      },
      {
        path: "projects/:projectId",
        element: <div>projectId page</div>,
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
      {
        path: "temp",
        element: <ProjectCreate />,
      },
    ],
  },
]);

export { router };
