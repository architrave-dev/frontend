import Landing from "@pages/Landing";
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
        path: "projects",
        children: [
          {
            index: true,
            element: <ArtistLanding />,
          },
          {
            path: "new",
            element: <div>new page</div>,
          },
          {
            path: ":projectId",
            element: <div>projectId page</div>,
          },
        ],
      },
    ],
  },
]);

export { router };
