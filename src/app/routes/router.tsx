import Landing from "@pages/Landing";
import Projects from "@pages/Project";
import ProjectCreate from "@pages/ProjectCreate";
import ProjectDetail from "@pages/ProjectDetail";
import GlobalNavigation from "@widgets/GlobalNavigation";
import { createBrowserRouter } from "react-router-dom";
import ArtistLanding from "src/pages/ArtistLanding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalNavigation />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "artist",
        element: <ArtistLanding />,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: "new",
            element: <ProjectCreate />,
          },
          {
            path: ":projectId",
            element: <ProjectDetail />,
          },
        ],
      },
    ],
  },
]);

export { router };
