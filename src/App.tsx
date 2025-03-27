import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FunnelScreen1 from "./screens/FunnelsScreen/v1/FunnelScreen";
import FunnelScreen2 from "./screens/FunnelsScreen/v2/FunnelScreen";
import FunnelScreen3 from "./screens/FunnelsScreen/v3/FunnelScreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FunnelScreen2 />,
    },
    {
      path: "/v1",
      element: <FunnelScreen1 />,
    },
    {
      path: "/v2",
      element: <FunnelScreen2 />,
    },
    {
      path: "/v3",
      element: <FunnelScreen3 />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
